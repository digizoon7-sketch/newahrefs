/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "react-router-dom": "./src/shims/react-router-dom.tsx",
    },
  },
};

export default nextConfig;

