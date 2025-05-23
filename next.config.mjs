/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
    ],
  },

  webpack: (config, { isServer }) => {
    // Disable persistent cache to avoid the PackFileCacheStrategy warning (for testing only)
    config.cache = false;

    // Optional: You can add custom handling here for specific loader/plugin caching if needed.

    return config;
  },
};

export default nextConfig;
