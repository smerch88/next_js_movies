/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.media-amazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
