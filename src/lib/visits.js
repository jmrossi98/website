// Reports page views to Streamy, which is where they're read back (Admin ->
// Portfolio visitors). Deliberately a beacon rather than edge logs: this site
// is fronted by CloudFront, and access logs would capture bots and scanners
// too, but wiring that up means changing the distribution. This needs no AWS
// change at all.
//
// The tradeoff, so the numbers aren't read wrong: a JS beacon only sees clients
// that run JavaScript. Bots, scanners and curl never appear here.

const ENDPOINT = 'https://streamy-app.com/api/analytics/collect'

/**
 * Fire-and-forget visit beacon.
 *
 * The body is sent as text/plain rather than application/json to keep this a
 * CORS "simple request". application/json would trigger a preflight, and a
 * beacon fired during page unload has no time for a round trip that must
 * happen first. Streamy parses the body as JSON regardless of this type.
 */
export function reportVisit(path) {
  try {
    const body = JSON.stringify({
      site: 'portfolio',
      path: path || window.location.pathname,
      referrer: document.referrer || null,
    })
    const blob = new Blob([body], { type: 'text/plain;charset=UTF-8' })

    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, blob)
    } else {
      // keepalive so the request survives the navigation that triggered it.
      fetch(ENDPOINT, { method: 'POST', body: blob, keepalive: true, mode: 'cors' })
    }
  } catch {
    // Analytics must never break the page. The endpoint always answers 204,
    // including on rate limit and bad input, so there is nothing to handle.
  }
}
