/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['wendsondev.com', 'github.com'],
  },
};

module.exports = nextTranslate(nextConfig);
