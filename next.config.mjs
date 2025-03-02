import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  // output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    siteName: '极核',
  },
};

export default withMDX(config);
