/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io'],
  },
  pageExtensions: ['page.js', 'page.jsx'],
}

module.exports = nextConfig
