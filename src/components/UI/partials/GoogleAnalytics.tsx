import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

import { NEXT_PUBLIC_GA_TRACKING_ID } from '@/lib/constants'
import * as gtag from '@/lib/gtag'

const GoogleAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
