/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  // webpack: (config, { isServer }) => {
  //     if (!isServer) {
  //     config.resolve.fallback.fs = false
  //     }
  //     return config
  // },
};

module.exports = nextConfig;
