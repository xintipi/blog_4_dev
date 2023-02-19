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
        <link rel="icon" href="/favicon.ico" />
        <link
          href={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_TRACKING_ID}`}
          rel="preload"
          as="script"
        />
      </Head>
      <body className="bg-bodyBg font-sans text-bodyColor">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
