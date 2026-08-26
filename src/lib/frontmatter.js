// Minimal frontmatter parser - no YAML dependency, just the handful of
// scalar/boolean/inline-array shapes our post frontmatter actually uses.
// Used from both Vite (browser, via posts.js) and plain Node (generate-feed.mjs).
export function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, content: raw }

  const [, front, content] = match
  const data = {}

  for (const line of front.split(/\r?\n/)) {
    if (!line.trim()) continue
    const idx = line.indexOf(':')
    if (idx === -1) continue

    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()

    if (/^\[.*\]$/.test(value)) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else if (value === 'true' || value === 'false') {
      value = value === 'true'
    } else {
      value = value.replace(/^["']|["']$/g, '')
    }

    data[key] = value
  }

  return { data, content: content.trim() }
}
