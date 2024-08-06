/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'athome.starbucks.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

