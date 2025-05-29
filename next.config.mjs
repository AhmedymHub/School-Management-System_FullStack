/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  webpack: (config, { isServer }) => {
    // Disable persistent cache to avoid the PackFileCacheStrategy warning (for testing only)
    config.cache = false;

    return config;
  },
};

export default nextConfig;

