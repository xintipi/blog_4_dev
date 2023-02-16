import clsx from 'clsx'
import { debounce } from 'lodash-es'
import { RefObject, useEffect, useRef } from 'react'

import { DeviceDemension } from '@/enums/deviceDemension'

interface HeaderMobileProps {
  mobileNav: boolean
  headerRef: RefObject<HTMLDivElement>
}

const TIMEOUT = 100

export default function HeaderMobile({ mobileNav, headerRef }: HeaderMobileProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mobileMenuInit()
    setTimeout(mobileNavDropdown, TIMEOUT)
    window.addEventListener('resize', function () {
      mobileMenuInit()
      setTimeout(mobileNavDropdown, TIMEOUT)
    })
  }, [headerRef])

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
    const maxWidth = DeviceDemension.maxWidth
    const menuContents = headerRef.current?.innerHTML
    if (window.innerWidth < maxWidth) {
      if (typeof menuContents === 'string') {
        const target = mobileMenuRef.current as HTMLDivElement
        target.innerHTML = menuContents
      }
    }
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
