import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old case-study slugs, merged into the Bedengan case study on 2026-11-24.
  async redirects() {
    return [
      { source: "/work/bedengan-back-office", destination: "/work/bedengan", permanent: true },
      { source: "/work/app-hub-mcp", destination: "/work/bedengan", permanent: true },
      { source: "/work/whatsapp-assistant", destination: "/work/bedengan", permanent: true },
    ];
  },
};

export default nextConfig;
