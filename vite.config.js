import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { marked } from 'marked'
import { parseFrontmatter } from './src/lib/frontmatter.js'

const POSTS_DIR = join(dirname(fileURLToPath(import.meta.url)), 'src/content/posts')
const VIRTUAL_ID = 'virtual:posts'
const RESOLVED_ID = '\0' + VIRTUAL_ID

/**
 * Serves published posts as a virtual module.
 *
 * The app used to reach for the markdown itself with import.meta.glob(...,
 * '?raw'), which inlines *every* post into the bundle, and then filtered
 * drafts in the browser. That hid drafts from the index, the feed and the
 * sitemap while still shipping their full text to every visitor, readable by
 * opening the JS. A draft that anyone can read is not a draft.
 *
 * Filtering happens here instead, in Node at build time, so an unpublished
 * post never reaches the client at all.
 *
 * This is also why scheduling is build-time: `publishAt` is compared against
 * the moment of the build, and the deploy workflow runs on a daily cron so a
 * scheduled post goes live on the next build after its date, not the instant
 * it passes.
 */
function publishedPosts() {
  function load() {
    let files = []
    try {
      files = readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
    } catch {
      // The directory is allowed not to exist -- a repo with no posts yet
      // should still build. (.gitkeep normally holds it open.)
      return []
    }

    const now = new Date()
    return files
      .map((file) => {
        const raw = readFileSync(join(POSTS_DIR, file), 'utf8')
        const { data, content } = parseFrontmatter(raw)
        const slug = data.slug || file.replace(/\.md$/, '')
        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          summary: data.summary || '',
          tags: Array.isArray(data.tags) ? data.tags : [],
          draft: data.draft === true,
          publishAt: data.publishAt ? new Date(data.publishAt) : null,
          html: marked.parse(content),
        }
      })
      .filter((post) => !post.draft && (!post.publishAt || post.publishAt <= now))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      // publishAt is dropped rather than serialised: it has done its job here,
      // and a Date does not survive JSON anyway.
      .map(({ draft, publishAt, ...post }) => post)
  }

  return {
    name: 'published-posts',
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      return `export const posts = ${JSON.stringify(load())}`
    },
    configureServer(server) {
      // Editing a post in dev should refresh the page rather than require a
      // restart, since the module is generated rather than watched by Vite.
      server.watcher.add(POSTS_DIR)
      const invalidate = (file) => {
        if (!file.endsWith('.md')) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', invalidate)
      server.watcher.on('change', invalidate)
      server.watcher.on('unlink', invalidate)
    },
  }
}

export default defineConfig({
  plugins: [vue(), publishedPosts()],
  build: {
    outDir: 'build',
  },
})
