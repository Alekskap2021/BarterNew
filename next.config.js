/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  experimental: {
    appDir: true,
  },

  images: {
    domains: ["api.tudasuda.kz"],
  },

  remotePatterns: [
    {
      protocol: "https",
      hostname: "api.tudasuda.kz",
      port: "",
      pathname: "/account123/**",
    },
  ],
};

module.exports = nextConfig;
