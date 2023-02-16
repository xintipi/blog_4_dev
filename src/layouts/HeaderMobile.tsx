import clsx from 'clsx'
import { debounce } from 'lodash-es'
import { RefObject, useEffect, useRef } from 'react'

interface HeaderMobileProps {
  mobileNav: boolean
  headerRef: RefObject<HTMLDivElement>
}

export default function HeaderMobile({ mobileNav, headerRef }: HeaderMobileProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mobileMenuInit()
    setTimeout(mobileNavDropdown, 100)
    window.addEventListener('resize', function () {
      mobileMenuInit()
      setTimeout(mobileNavDropdown, 100)
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
    const maxWidth = 992
    const menuContents = headerRef.current?.innerHTML
    if (window.innerWidth < maxWidth) {
      if (typeof menuContents === 'string') {
        const target = mobileMenuRef.current as HTMLDivElement
        target.innerHTML = menuContents
      }
    }
  }, 100)

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
