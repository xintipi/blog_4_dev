import clsx from 'clsx'
import { debounce } from 'lodash-es'
import { RefObject, useEffect, useRef } from 'react'

import { DeviceDemension } from '@/enums/deviceDemension'

interface HeaderMobileProps {
  mobileNav: boolean
  headerRef: RefObject<HTMLDivElement>
}

const TIMEOUT = 100

export default function AppHeaderMobile({ mobileNav, headerRef }: HeaderMobileProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    handlerResize()
    window.addEventListener('resize', handlerResize)
    // return () => window.removeEventListener('resize', handlerResize)
  }, [headerRef])

  const handlerResize = () => {
    mobileMenuInit()
    setTimeout(mobileNavDropdown, TIMEOUT)
  }

  const mobileNavDropdown = () => {
    const dropdownMenu = document.querySelector('#mobile-menu .dropdown-menu')
    const dropdownToggle = document.querySelector('#mobile-menu .dropdown-toggle')
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', () => {
        dropdownToggle.classList.toggle('show')
        dropdownMenu.classList.toggle('show')
      })
    }
  }

  const mobileMenuInit = debounce(() => {
    const maxWidth = DeviceDemension.MaxWidth
    const menuContents = headerRef.current?.innerHTML
    const target = mobileMenuRef.current as HTMLDivElement
    target.innerHTML = window.innerWidth < maxWidth ? (menuContents as string) : ''
  }, TIMEOUT)

  return (
    <nav
      className={clsx({
        'mobile-nav header-nav': true,
        'mobile-nav-open': mobileNav,
      })}>
      <div className="container mx-auto">
        <div id="mobile-menu" ref={mobileMenuRef}></div>
      </div>
    </nav>
  )
}
