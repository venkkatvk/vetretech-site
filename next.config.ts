import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // CRITICAL: This generates the 'out' folder
  images: {
    unoptimized: true, // Necessary for static hosting
  },
};

export default nextConfig;