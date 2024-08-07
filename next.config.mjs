import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(path.dirname(fileURLToPath(import.meta.url)), "styles"),
    ],
  },
  env: {
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preventing-sensitive-data-from-being-exposed-to-the-client
  experimental: {
    taint: true,
  },

  // https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/status-codes
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/overview",
        permanent: true, // triggers 308
      },
    ];
  },
};

export default nextConfig;
