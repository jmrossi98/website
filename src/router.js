// Client-side "routing" for a one-page site: nav links get clean paths like
// /experience instead of #experience, without ever leaving index.html.
export const SECTION_IDS = ['about', 'experience', 'projects', 'contact']

function scrollToId(id, behavior) {
  document.getElementById(id)?.scrollIntoView({ behavior })
}

function pathToSection(pathname) {
  const clean = pathname.replace(/^\/+|\/+$/g, '')
  return SECTION_IDS.includes(clean) ? clean : null
}

// Used by nav/hero links: updates the URL without a page reload, then scrolls.
export function goToSection(id, event) {
  event?.preventDefault()
  window.history.pushState(null, '', id ? `/${id}` : '/')
  if (id) scrollToId(id, 'smooth')
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function initRouter() {
  const { pathname, hash, search } = window.location

  // Canonicalize legacy /index.html (and /index.html#section) URLs, e.g. from
  // old links/bookmarks, to the clean path equivalent.
  if (pathname === '/index.html' || pathname === '/index.html/') {
    const legacySection = hash.replace('#', '')
    const nextPath = SECTION_IDS.includes(legacySection) ? `/${legacySection}` : '/'
    window.history.replaceState(null, '', nextPath + search)
  }

  // Deep link: jump to the section matching the current path on first load.
  const initial = pathToSection(window.location.pathname)
  if (initial) requestAnimationFrame(() => scrollToId(initial, 'auto'))

  window.addEventListener('popstate', () => {
    const section = pathToSection(window.location.pathname)
    if (section) scrollToId(section, 'smooth')
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
