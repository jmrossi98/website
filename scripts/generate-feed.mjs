// Generates feed.xml and sitemap.xml into the build output after `vite
// build`, and copies index.html to 404.html so GitHub Pages serves the SPA
// (which resolves the real route client-side) instead of a bare 404 for
// direct hits/refreshes on deep links like /blog/some-post. Reads the same
// post markdown files/frontmatter shape as src/lib/posts.js, since Vite's
// import.meta.glob isn't available here.
import { readdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { parseFrontmatter } from '../src/lib/frontmatter.js'

const SITE_URL = 'https://jakobrossi.com'
const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const postsDir = path.join(rootDir, 'src/content/posts')
const outDir = path.join(rootDir, 'build')

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c])
}

const now = new Date()

const posts = readdirSync(postsDir)
  .filter((f) => f.endsWith('.md'))
  .map((file) => {
    const raw = readFileSync(path.join(postsDir, file), 'utf-8')
    const { data } = parseFrontmatter(raw)
    return {
      slug: data.slug || file.replace(/\.md$/, ''),
      title: data.title || file.replace(/\.md$/, ''),
      date: data.date || '',
      summary: data.summary || '',
      draft: data.draft === true,
      publishAt: data.publishAt ? new Date(data.publishAt) : null,
    }
  })
  .filter((post) => !post.draft && (!post.publishAt || post.publishAt <= now))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const feedItems = posts
  .map(
    (post) => `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${SITE_URL}/blog/${post.slug}</link>
    <guid>${SITE_URL}/blog/${post.slug}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <description>${escapeXml(post.summary)}</description>
  </item>`
  )
  .join('')

const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Jakob Rossi</title>
  <link>${SITE_URL}</link>
  <description>Posts from jakobrossi.com</description>${feedItems}
</channel>
</rss>
`

const staticPaths = ['/', '/about', '/experience', '/projects', '/contact', '/blog']
const postPaths = posts.map((post) => `/blog/${post.slug}`)

const sitemapUrls = [...staticPaths, ...postPaths]
  .map((p) => `
  <url>
    <loc>${SITE_URL}${p}</loc>
  </url>`)
  .join('')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapUrls}
</urlset>
`

writeFileSync(path.join(outDir, 'feed.xml'), feedXml)
writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml)
copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'))

console.log(`Generated feed.xml (${posts.length} posts), sitemap.xml (${staticPaths.length + postPaths.length} urls), and 404.html fallback`)
