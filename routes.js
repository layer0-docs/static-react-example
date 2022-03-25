// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'
import { API_CACHE_HANDLER } from './layer0/cache'

const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR
const ONE_YEAR = 365 * ONE_DAY

const edgeOnly = {
  browser: false,
  edge: { maxAgeSeconds: ONE_YEAR },
}

const edgeAndBrowser = {
  browser: { maxAgeSeconds: ONE_YEAR },
  edge: { maxAgeSeconds: ONE_YEAR },
}

const categories = ['hats', 'shoes', 'watches']
let productUrls = []
categories
  .map((c) => {
    const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
      path: `/product/${c}-${i}`,
    }))
    const apiPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
      path: `/api/product/${c}-${i}`,
    }))
    return [...page, ...apiPage]
  })
  .map((pu) => (productUrls = [...productUrls, ...pu]))

export default new Router()

  .prerender([
    // HTML pages
    { path: '/' },
    { path: '/categories/shoes' },
    { path: '/categories/watches' },
    { path: '/categories/hats' },
    { path: '/api/categories/shoes' },
    { path: '/api/categories/watches' },
    { path: '/api/categories/hats' },

    // Products
    ...productUrls,
  ])
  .match('/api/:path*', API_CACHE_HANDLER)
  .match('/images/:path*', API_CACHE_HANDLER)
  .match('/service-worker.js', ({ serviceWorker }) => serviceWorker('build/service-worker.js'))

  // match routes for js/css resources and serve the static files
  .match('/static/:path*', ({ serveStatic, cache }) => {
    cache(edgeAndBrowser)
    serveStatic('build/static/:path*')
  })
  // match client-side routes that aren't a static asset
  // and serve the app shell. client-side router will
  // handle the route once it is rendered
  .match('/:path*/:file([^\\.]+|)', ({ appShell, cache }) => {
    cache(edgeOnly)
    appShell('build/index.html')
  })
  // match other assets such as favicon, manifest.json, etc
  .match('/:path*', ({ serveStatic, cache }) => {
    cache(edgeOnly)
    serveStatic('build/:path*')
  })

  // send any unmatched request to origin
  .fallback(({ serveStatic }) => serveStatic('build/index.html'))
