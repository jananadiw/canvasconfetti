/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.ARTWORK_HOSTNAME_URL,
      },
    ],
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
