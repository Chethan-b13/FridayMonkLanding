import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/FridayMonkLanding",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
