/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc', // This path is for direct Google Drive image links
      },
      {
        protocol: 'https',
        hostname: 'photos.app.goo.gl',

      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
