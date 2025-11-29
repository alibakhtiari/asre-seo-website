/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for OpenNext
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Removed to enable Image Optimization
    domains: ['asreseo.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-slot'],
  },
}

module.exports = nextConfig
