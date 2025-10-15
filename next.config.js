/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;


