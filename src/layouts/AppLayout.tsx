import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'
import { ReactNode, useCallback, useEffect, useState } from 'react'

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

const variant = process.env.NEXT_PUBLIC_APP_NAME

export default function AppLayout({
  title,
  description,
  canonical,
  openGraph,
  children,
}: AppLayoutProps) {
  const [metaTile, setMetaTile] = useState<string>()
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const { pathname } = useRouter()

  useEffect(() => {
    if (pathname === '/') {
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
      />

      <AppHeader mobileNav={onHandleMobileNav} />

      <AppHeaderMobile mobileNav={mobileNav} />

      {children}

      <AppFooter />
    </>
  )
}
