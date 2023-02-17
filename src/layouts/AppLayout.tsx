import { NextSeo } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'
import { ReactNode, useCallback, useRef, useState } from 'react'

import AppFooter from '@/layouts/AppFooter'
import AppHeader from '@/layouts/AppHeader'
import AppHeaderMobile from '@/layouts/AppHeaderMobile'

interface AppLayoutProps {
  title?: string
  description?: string
  canonical?: string
  openGraph?: OpenGraph
  children: ReactNode
}

export default function AppLayout({
  title,
  description,
  canonical,
  openGraph,
  children,
}: AppLayoutProps) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME

  const [mobileNav, setMobileNav] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const onHandleMobileNav = useCallback((open: boolean) => {
    setMobileNav(open)
  }, [])

  return (
    <>
      <NextSeo
        title={title ? `${title} - ${appName}` : appName}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
      />

      <AppHeader mobileNav={onHandleMobileNav} ref={headerRef} />
      <AppHeaderMobile mobileNav={mobileNav} headerRef={headerRef} />

      {children}

      <AppFooter />
    </>
  )
}
