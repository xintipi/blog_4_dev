import clsx from 'clsx'

import Menu from '@/components/UI/shared/Menu'

interface HeaderMobileProps {
  mobileNav: boolean
}

export default function AppHeaderMobile({ mobileNav }: HeaderMobileProps) {
  return (
    <nav
      className={clsx({
        'mobile-nav header-nav': true,
        'mobile-nav-open': mobileNav,
      })}>
      <div className="container mx-auto">
        <div id="mobile-menu">
          <Menu />
        </div>
      </div>
    </nav>
  )
}
