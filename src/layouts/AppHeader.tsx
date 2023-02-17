import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useRef, useState } from 'react'

import Menu from '@/components/UI/shared/Menu'
import styles from '@/styles/modules/AppFooter.module.scss'

interface HeaderProps {
  mobileNav: (open: boolean) => void
}

export default function AppHeader(props: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false)

  const searchFormRef = useRef<HTMLFormElement>(null)
  const topSearchBtnRef = useRef<HTMLDivElement>(null)

  const onHandlerSearch = () => {
    const target = topSearchBtnRef.current as HTMLDivElement
    target.style.display = 'none'
    searchFormRef.current?.classList.remove('hidden')
  }

  const onHandlerToggleMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    document.documentElement.classList.toggle('noscroll')
    setOpen(!open)
    props.mobileNav(!open)
  }

  return (
    <header className="bg-white shadow-header">
      <div className="container mx-auto">
        <div
          className={clsx(
            styles['header-top'],
            'border-b-border flex items-center justify-between border-borderColor pt-5 pb-3.5 lg:border-b'
          )}>
          <div className="header-top-logo">
            <Link href="/" title="Logo">
              <Image src="/img/webp/logo_2x.webp" alt="Dblog Logo" width={32} height={32} />
            </Link>
          </div>
          <div className="relative flex items-center">
            <div className="header-top-search mr-2.5 lg:mr-0">
              <div
                onClick={onHandlerSearch}
                className="header-top-search-btn h-7 w-7"
                ref={topSearchBtnRef}>
                <i className="pe-7s-search cursor-pointer text-3xl text-primary" />
              </div>
              <form
                ref={searchFormRef}
                id="search-form"
                className="absolute top-[calc(50%-24px)] right-0 mr-10 hidden w-200px lg:mr-0">
                <input type="text" className="form-control" placeholder="Search..." />
                <button
                  className="absolute top-[calc(50%-23px)] right-3px text-3xl text-primary"
                  type="button">
                  <i className="pe-7s-search" />
                </button>
              </form>
            </div>
            <Link href="#" className="light-link" title="Menu">
              <div
                onClick={onHandlerToggleMenu}
                id="menu-animate-icon"
                className={clsx({
                  'relative ml-2.5 block h-4.5 w-6 rotate-0 cursor-pointer transition-transform lg:hidden':
                    true,
                  open,
                })}>
                <span className="top-0 origin-left"></span>
                <span className="top-2 origin-left"></span>
                <span className="top-4 origin-left"></span>
              </div>
            </Link>
          </div>
        </div>
        <nav className="header-nav hidden py-5 lg:block">
          <Menu />
        </nav>
      </div>
    </header>
  )
}
