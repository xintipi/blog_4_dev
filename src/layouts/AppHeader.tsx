import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { MouseEvent, useState } from 'react'
import { HiSearch } from 'react-icons/hi'

import Menu from '@/components/UI/shared/Menu'
import styles from '@/styles/modules/AppFooter.module.scss'

interface IHeaderProps {
  mobileNav: (open: boolean) => void
}

export default function AppHeader(props: IHeaderProps) {
  const [open, setOpen] = useState<boolean>(false)

  const { t } = useTranslation('header')

  const onHandlerToggleMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setOpen(!open)
    props.mobileNav(!open)
  }

  return (
    <header className="bg-white shadow-header">
      <div className="container mx-auto">
        <div
          className={clsx(
            styles['header-top'],
            'border-b-border relative flex items-center justify-between border-borderColor pt-5 pb-3.5 lg:border-b'
          )}>
          <div className="header-top-logo w-1/2">
            <div className="flex items-center">
              <Link href="/" title="Logo">
                <Image src="/img/logo.png" alt="Dblog Logo" width={35} height={35} />
              </Link>
              <form className="absolute top-[calc(50%-24px)] left-[50px] mr-10 w-200px lg:mr-0">
                <input
                  type="text"
                  className="form-control pr-9"
                  placeholder={t<string>('header_placehoder_search')}
                />
                <button
                  className="absolute top-[calc(50%-12px)] right-3px text-3xl text-primary"
                  type="button"
                  aria-label="search">
                  <HiSearch size={24} />
                </button>
              </form>
            </div>
          </div>
          <div className="relative flex items-center">
            <div
              onClick={onHandlerToggleMenu}
              id="menu-animate-icon"
              className={clsx({
                'relative block h-4.5 w-6 rotate-0 cursor-pointer transition-transform lg:hidden':
                  true,
                open,
              })}>
              <span className="top-0 origin-left"></span>
              <span className="top-2 origin-left"></span>
              <span className="top-4 origin-left"></span>
            </div>
          </div>
        </div>
        <nav className="header-nav hidden py-5 lg:block">
          <Menu />
        </nav>
      </div>
    </header>
  )
}
