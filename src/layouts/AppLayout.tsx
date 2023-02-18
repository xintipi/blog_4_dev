import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { NextSeoProps } from 'next-seo/lib/types'
import { ReactNode, useCallback, useEffect, useState } from 'react'

import AppFooter from '@/layouts/AppFooter'
import AppHeader from '@/layouts/AppHeader'
import AppHeaderMobile from '@/layouts/AppHeaderMobile'

type AppLayoutProps = Pick<NextSeoProps, 'title' | 'description' | 'canonical' | 'openGraph'> & {
  keywords?: string | string[]
  children: ReactNode
}

const variant = process.env.NEXT_PUBLIC_APP_NAME

export default function AppLayout({
  title,
  description,
  canonical,
  keywords,
  openGraph,
  children,
}: AppLayoutProps) {
  const [metaTile, setMetaTile] = useState<string>()
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const { pathname } = useRouter()

  useEffect(() => {
    if (['/', '/contact'].includes(pathname)) {
      setMetaTile(title)
    } else {
      setMetaTile(title ? `${title} - ${variant}` : variant)
    }
  }, [pathname])

  const onHandleMobileNav = useCallback((open: boolean) => {
    setMobileNav(open)
  }, [])

  return (
    <>
      <NextSeo
        title={metaTile}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
        twitter={{
          site: '@thepracticaldev',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords as string,
          },
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
        ]}
      />

      <AppHeader mobileNav={onHandleMobileNav} />

      <AppHeaderMobile mobileNav={mobileNav} />

      {children}

      <AppFooter />
    </>
  )
}
