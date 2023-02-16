import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { NEXT_PUBLIC_GA_TRACKING_ID } from '@/lib/constants'
import * as gtag from '@/lib/gtag'

interface GoogleAnalyticsProps {
  pageTitle: string
}

const GoogleAnalytics = ({ pageTitle }: GoogleAnalyticsProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!location.host.includes('localhost')) {
      console.log(pageTitle, pathname + searchParams.toString())
      gtag.pageview(pageTitle, pathname + searchParams.toString())
    }
  }, [pathname, searchParams, pageTitle])

  if (!NEXT_PUBLIC_GA_TRACKING_ID) return null

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga" defer strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_GA_TRACKING_ID}', { page_path: window.location.pathname });
          `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
