# jakobrossi.com

Personal portfolio site for Jakob Rossi, built with Vue 3 and Vite.

## Getting Started

Make sure you have Node.js installed (the deploy workflow uses Node 22).

Install dependencies:

### `npm install`

Run a local dev server with hot reload:

### `npm run dev`

Build for production and preview the built site:

### `npm start`

Runs a production build, then starts the dev server.

### `npm run build`

Builds the site to `build/`.

### `npm run preview`

Serves the production build locally.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and
deploys it to GitHub Pages. The custom domain (`jakobrossi.com`) is fronted by an AWS
CloudFront distribution, which also handles clean/pretty section URLs (e.g.
`/experience` instead of `/index.html#experience`) via a CloudFront Function that
falls back to `index.html` for unknown paths.

## Contact

If you'd like to reach out, send an email to jmrossi98@gmail.com.
