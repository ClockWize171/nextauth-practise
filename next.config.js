/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', "via.placeholder.com"],
  },
  fontLoaders: [
    { loader: 'next/font/google', options: { subsets: ['latin'] } },
  ],
}

module.exports = nextConfig
