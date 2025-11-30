import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/FridayMonkLanding",
  // Ensure static assets are prefixed with the repo name when deployed to GitHub Pages
  assetPrefix: "/FridayMonkLanding",
  // Export with trailing slashes so pages become directories with index.html
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
