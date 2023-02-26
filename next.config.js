/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')
const { withPlaiceholder } = require('@plaiceholder/next')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  i18n,
  env: {
    NEXT_PUBLIC_APP_NAME: 'DEV Blog 👩‍💻👨‍💻',
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: 'RPTItmVfol0y-KYF2ACSXyfeKgnm0D5KJEVIJr51DO0',
    NEXT_PUBLIC_GA_TRACKING_ID: 'G-LQ88J1EDL3',
    NEXT_PUBLIC_NOTION_PROJECT_API_SECRET: 'secret_uI1c1tZb6LkzCjOYqBI3Not3QeY4nnmQ7mhnvS0vP9d',
    NEXT_PUBLIC_DATABASE_PROJECT_ID: '9fffc3db6c8f423cadfa6ff419bd39a0',
    NEXT_PUBLIC_FB_APP_ID: '513655297563615',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  outputFileTracing: false,
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://dblog.one' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}

module.exports = withPlaiceholder(nextConfig)

// module.exports = withBundleAnalyzer({
//   ...nextConfig,
// })
