/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.aswo.com", "doctor-h.com.ua", "lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["react"] = "react/node_modules/react";
    }
    return config;
  },
};

module.exports = nextConfig;
