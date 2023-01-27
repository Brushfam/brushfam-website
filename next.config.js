/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    path: `/brushfam-website/_next/public`,
  },
  assetPrefix: '/brushfam-website',
  basePath: '/brushfam-website'
}

module.exports = nextConfig
