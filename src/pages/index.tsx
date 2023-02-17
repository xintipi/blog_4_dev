import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useRef, useState } from 'react'

import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import HeaderMobile from '@/layouts/HeaderMobile'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header'])),
    },
  }
}

export default function Home() {
  const [mobileNav, setMobileNav] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const onHandleMobileNav = useCallback((open: boolean) => {
    setMobileNav(open)
  }, [])

  return (
    <>
      <Header mobileNav={onHandleMobileNav} ref={headerRef} />
      <HeaderMobile mobileNav={mobileNav} headerRef={headerRef} />
      <h2>test</h2>
      <Footer />
    </>
  )
}
