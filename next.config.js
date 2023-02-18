/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')
const { withPlaiceholder } = require('@plaiceholder/next')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  i18n,
  env: {
    NEXT_PUBLIC_APP_NAME: 'DEV Blog 👩‍💻👨‍💻',
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: 'd-P3UvqL6a64Fx6u3Sq9IjZegJX_ACZx3SyxhSEGXMg',
  },
  images: {
    domains: ['i.ibb.co'],
  },
}

module.exports = withPlaiceholder(nextConfig)

// module.exports = withBundleAnalyzer({
//   ...nextConfig,
// })
