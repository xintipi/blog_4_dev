import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-bodyBg font-sans text-bodyColor">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
