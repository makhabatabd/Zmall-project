/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      // use: ['@svgr/webpack'],
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;
