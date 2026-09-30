/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === 'true';
const basePath = isPages ? '/hylo-cartis-studio' : '';
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: isPages ? '/hylo-cartis-studio/' : undefined,
  // next/image com unoptimized:true não prefixa basePath sozinho —
  // data.ts usa NEXT_PUBLIC_BASE_PATH para montar o src correto.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
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
