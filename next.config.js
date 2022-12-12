/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'i.pinimg.com',
      'pondinformer.com',
      's3.amazonaws.com',
      'www.thespruce.com',
      'hort.extension.wisc.edu',
      'www.thespruce.com',
      's3-alpha-sig.figma.com',
    ],
  },
}

module.exports = nextConfig
