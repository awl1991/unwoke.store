export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
    reactOwnerStack: true,
    newDevOverlay: true,
    missingSuspenseWithCSRBailout: false
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
