/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === 'true';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isPages ? '/hylo-cartis-studio' : '',
  assetPrefix: isPages ? '/hylo-cartis-studio/' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'dcdn-us.mitiendanube.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] },
};
export default nextConfig;
