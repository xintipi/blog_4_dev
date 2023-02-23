import { NextSeo } from 'next-seo'
import { NextSeoProps } from 'next-seo/lib/types'
import { ReactNode, useCallback, useEffect, useState } from 'react'

import AppFooter from '@/layouts/AppFooter'
import AppHeader from '@/layouts/AppHeader'
import AppHeaderMobile from '@/layouts/AppHeaderMobile'
import { NEXT_PUBLIC_FB_APP_ID } from '@/lib/constants'

type AppLayoutProps = Pick<NextSeoProps, 'title' | 'description' | 'canonical' | 'openGraph'> & {
  keywords?: string | string[]
  children: ReactNode
}

export default function AppLayout({
  title,
  description,
  canonical,
  keywords,
  openGraph,
  children,
}: AppLayoutProps) {
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const appName = process.env.NEXT_PUBLIC_APP_NAME
  const metaTile = title ? `${title} - ${appName}` : appName

  useEffect(() => {
    if (!mobileNav) {
      document.documentElement.classList.remove('noscroll')
      document.body.classList.remove('noscroll')
    }
  }, [mobileNav])

  const onHandleMobileNav = useCallback(
    (open: boolean) => {
      setMobileNav(open)
      document.documentElement.classList.toggle('noscroll')
      document.body.classList.toggle('noscroll')
    },
    [mobileNav]
  )

  return (
    <>
      <NextSeo
        title={metaTile}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
        twitter={{
          handle: '@trung_xin',
          site: '@huutrung.mmt',
          cardType: 'summary_large_image',
        }}
        facebook={{
          appId: NEXT_PUBLIC_FB_APP_ID as string,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:title',
            content: metaTile as string,
          },
          {
            name: 'twitter:description',
            content: description as string,
          },
          {
            name: 'twitter:image:src',
            content: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png',
          },
          {
            name: 'keywords',
            content: keywords as string,
          },
        ]}
      />

      <AppHeader mobileNav={onHandleMobileNav} />

      <AppHeaderMobile mobileNav={mobileNav} />

      {children}

      <AppFooter />
    </>
  )
}
