/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: { 
    remotePatterns: [
    {
      protocol: 'https',
      hostname: process.env.ARTWORK_HOSTNAME_URL,
    },
  ],
}
}

module.exports = nextConfig
