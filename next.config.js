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
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: 'RPTItmVfol0y-KYF2ACSXyfeKgnm0D5KJEVIJr51DO0',
    NEXT_PUBLIC_GA_TRACKING_ID: 'G-LQ88J1EDL3',
  },
  images: {
    domains: ['i.ibb.co'],
  },
}

module.exports = withPlaiceholder(nextConfig)

// module.exports = withBundleAnalyzer({
//   ...nextConfig,
// })
