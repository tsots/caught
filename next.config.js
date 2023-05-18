/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  //   basePath: "/caught",
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
