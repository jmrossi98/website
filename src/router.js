// Client-side routing via vue-router. Section paths (/about, /experience, ...)
// all render the same HomePage; the afterEach hook below smooth-scrolls to
// the matching anchor, preserving the "one page, clean paths" feel this site
// had before the blog needed real per-page routes.
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import BlogListPage from './components/BlogListPage.vue'
import BlogPostPage from './components/BlogPostPage.vue'
import { reportVisit } from './lib/visits.js'

export const SECTION_IDS = ['about', 'experience', 'projects', 'contact']

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

function resolveLegacyIndexHtml(to) {
  // Canonicalize legacy /index.html (and /index.html#section) URLs, e.g.
  // from old links/bookmarks, to the clean path equivalent.
  const legacySection = to.hash.replace('#', '')
  return SECTION_IDS.includes(legacySection) ? `/${legacySection}` : '/'
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { home: true } },
    ...SECTION_IDS.map((id) => ({ path: `/${id}`, name: id, component: HomePage, meta: { home: true } })),
    { path: '/blog', name: 'blog', component: BlogListPage },
    { path: '/blog/:slug', name: 'post', component: BlogPostPage },
    { path: '/index.html', redirect: resolveLegacyIndexHtml },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

// vue-router's own `scrollBehavior` option scrolls via `window.scrollTo`,
// which some browser extensions (ad/tracker/"scroll-jacking" blockers)
// silently no-op - `Element.scrollIntoView` isn't affected by those, so we
// drive scrolling ourselves here instead of using that option.
router.afterEach((to, from) => {
  const behavior = from.name ? 'smooth' : 'auto'
  const targetId = SECTION_IDS.includes(to.path.slice(1)) ? to.path.slice(1) : null

  // Wait for webfonts (layout-shifting via font-display: swap) and a beat
  // for layout to settle before measuring, or the scroll can land mid-reflow.
  // Deliberately setTimeout, not requestAnimationFrame: rAF is paused for
  // backgrounded/inactive tabs, which would delay this indefinitely.
  const fontsReady = document.fonts?.ready ?? Promise.resolve()
  fontsReady.then(() => {
    setTimeout(() => {
      const target = targetId ? document.getElementById(targetId) : document.body
      target?.scrollIntoView({ behavior, block: 'start' })
    }, 50)
  })
})

// Visit reporting. Its own hook rather than folded into the scroll one above,
// which defers its work until webfonts have loaded -- a visit should be
// reported when it happens, not when the page finishes settling.
//
// afterEach, so client-side navigations count too. Without this the site would
// only ever report the first load, and moving between /blog and /blog/:slug --
// which is most of the reading on this site -- would be invisible.
router.afterEach((to) => {
  reportVisit(to.fullPath)
})

// Used by NavBar/Hero links: navigates to a section (or home); afterEach
// above handles the smooth scroll.
export function goToSection(id, event) {
  event?.preventDefault()
  router.push(id ? `/${id}` : '/')
}

export default router
