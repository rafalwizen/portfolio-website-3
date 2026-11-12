/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placeholder.svg",
			},
		],
		unoptimized: true,
	},
}

module.exports = nextConfig
