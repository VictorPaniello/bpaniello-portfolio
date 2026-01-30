/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Temporarily ignore TypeScript errors
      },
    eslint: {
		ignoreDuringBuilds: true,
	},
};
module.exports = nextConfig
