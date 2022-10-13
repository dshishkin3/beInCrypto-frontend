/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "cdn.coinranking.com",
      "d1-invdn-com.investing.com",
      "i-invdn-com.investing.com",
    ],
  },
};

module.exports = nextConfig;
