/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true
})



const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      // use: ['@svgr/webpack'],
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
  env: {
    SUPER_ADMIN: process.env.SUPER_ADMIN,
  },
};

module.exports = withPWA(nextConfig);
