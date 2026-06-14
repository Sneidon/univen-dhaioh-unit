import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
    localPatterns: [
      { pathname: "/banners/**" },
      { pathname: "/cards/**" },
      { pathname: "/gallery/**" },
      { pathname: "/logos/**" },
      { pathname: "/prof-zungu.jpg" },
      { pathname: "/james-headshot.jpg" },
    ],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
