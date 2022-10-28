/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'fs.impact-media.eu'],
  },
  redirects: async () => {
    return [
      {
        source: '/public-relations-20',
        destination: '/services/event-communication',
        permanent: true,
      },
      {
        source: '/live-streaming-webinars',
        destination: '/services/live-stream',
        permanent: true,
      },
    ];
  }
});
