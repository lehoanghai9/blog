import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/blog/:path*.md",
        destination: "/api/blog/:path*",
      },
      {
        source: "/llms.txt",
        destination: "/api/llms",
      },
    ];
  },
};

export default withMDX(config);
