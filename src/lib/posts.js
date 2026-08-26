import { marked } from 'marked'
import { parseFrontmatter } from './frontmatter.js'

const files = import.meta.glob('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

const now = new Date()

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: data.slug || slugFromPath(path),
      title: data.title || slugFromPath(path),
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

export function getPost(slug) {
  return posts.find((post) => post.slug === slug)
}
