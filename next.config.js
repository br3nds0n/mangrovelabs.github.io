/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/home",
  output: "export",
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;


