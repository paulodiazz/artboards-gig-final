/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/admin/users',
        basePath: false,
        permanent: false
      }
    ]
  },
  webpack: function (config, options) {
		config.experiments = {
			asyncWebAssembly: true,
			layers: true,
		}
		return config
	},
}

module.exports = nextConfig
