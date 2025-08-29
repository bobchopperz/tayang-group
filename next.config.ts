import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',

    // Mungkin diperlukan jika Anda menggunakan next/image
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
