import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	output: 'export',
	trailingSlash: true,
	assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.procleanfamily.com' : undefined,
};

export default nextConfig;
