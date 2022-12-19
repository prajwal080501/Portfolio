/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.freepik.com', 
      'cdn.sanity.io'],
  }
}

module.exports = nextConfig
