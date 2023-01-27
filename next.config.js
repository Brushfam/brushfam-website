/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: 'https://727-ventures.github.io/brushfam-website/',
    path: `/brushfam-website/_next/public`,
  },
  assetPrefix: '/brushfam-website',
  basePath: '/brushfam-website'
}

module.exports = nextConfig
