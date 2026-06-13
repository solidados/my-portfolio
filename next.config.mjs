/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { qualities: [75, 100] },
  serverExternalPackages: ['@react-pdf/renderer'],
};

export default nextConfig;
