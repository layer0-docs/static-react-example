/* eslint-disable no-restricted-globals */
import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { Prefetcher } from '@layer0/prefetch/sw';
import DeepFetchPlugin from '@layer0/prefetch/sw/DeepFetchPlugin';

skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST || []);

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      {
        jsonQuery: 'picture',
        as: 'image',
      },
    ]),
  ],
}).route();
