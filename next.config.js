/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_ARTWORK_HOSTNAME_URL,
      },
    ],
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
