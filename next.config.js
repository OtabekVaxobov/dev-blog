/** @type {import('next').NextConfig} */
const nextConfig = {
  devtool: "source-map",
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
