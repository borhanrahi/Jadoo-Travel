import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // Enable static image imports
  images: {
    disableStaticImages: false,
  },
};

export default nextConfig;
