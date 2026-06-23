const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: "/nanda-milk-dairy",
  assetPrefix: "/nanda-milk-dairy",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
