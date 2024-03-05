/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.aswo.com",
      "doctor-h.com.ua",
      "lh3.googleusercontent.com",
      "drive.google.com",
      "zapchasty.com.ua",
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
