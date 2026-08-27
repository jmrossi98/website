// Published posts, prepared at build time by the `published-posts` Vite plugin
// (see vite.config.js).
//
// Deliberately not import.meta.glob('?raw'): that inlines every markdown file
// into the bundle, so filtering drafts here in the browser would still ship
// their full text to every visitor. The filtering happens in Node instead, and
// an unpublished post never reaches the client.
import { posts } from 'virtual:posts'

export { posts }

export function getPost(slug) {
  return posts.find((post) => post.slug === slug)
}
