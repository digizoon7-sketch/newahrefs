/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  turbopack: {
    resolveAlias: {
      "react-router-dom": "./src/shims/react-router-dom.tsx",
    },
  },
};

export default nextConfig;

