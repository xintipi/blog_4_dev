import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { NEXT_PUBLIC_GA_TRACKING_ID } from '@/lib/constants'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link
          href={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_TRACKING_ID}`}
          rel="preload"
          as="script"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      </Head>
      <body className="bg-bodyBg font-sans text-bodyColor">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
