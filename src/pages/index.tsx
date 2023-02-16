import { useCallback, useRef, useState } from 'react'

import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import HeaderMobile from '@/layouts/HeaderMobile'

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
