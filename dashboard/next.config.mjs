import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL ?? "http://localhost:3000";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": __dirname,
    };

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/public/:path*",
        destination: `${API_URL}/api/public/:path*`,
      },
    ];
  },
};

export default nextConfig;
