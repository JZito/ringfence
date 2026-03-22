/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL ?? "http://localhost:3000";

const nextConfig = {
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
