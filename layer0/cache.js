export const API_CACHE_HANDLER = ({ cache, proxy, removeUpstreamResponseHeader }) => {
  removeUpstreamResponseHeader('cache-control')
  cache({
    browser: {
      maxAgeSeconds: 0,
      serviceWorkerSeconds: 60 * 60 * 24,
    },
    edge: {
      forcePrivateCaching: true,
      maxAgeSeconds: 60 * 60 * 24 * 365,
      staleWhileRevalidateSeconds: 60 * 60 * 24,
    },
  })
  proxy('api')
}
