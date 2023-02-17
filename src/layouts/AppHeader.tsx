import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { ChangeEvent, forwardRef, MouseEvent, useRef, useState } from 'react'

import styles from '@/styles/modules/AppFooter.module.scss'

interface HeaderProps {
  mobileNav: (open: boolean) => void
}

const AppHeader = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const [open, setOpen] = useState<boolean>(false)

  const searchFormRef = useRef<HTMLFormElement>(null)
  const topSearchBtnRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation('header')
  const router = useRouter()

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    router
      .push(router.route, router.asPath, {
        locale: value,
      })
      .then((r) => r)
  }

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
                <i className="pe-7s-search cursor-pointer text-3xl text-primary"></i>
              </div>
              <form
                ref={searchFormRef}
                id="search-form"
                className="absolute top-[calc(50%-24px)] right-0 mr-10 hidden w-200px lg:mr-0">
                <input type="text" className="form-control" placeholder="Search..."></input>
                <button
                  className="absolute top-[calc(50%-23px)] right-3px text-3xl text-primary"
                  type="button">
                  <i className="pe-7s-search"></i>
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
        <nav className="header-nav hidden py-5 lg:block" ref={ref}>
          <ul className="block lg:flex">
            <li className="ml-0 mr-5">
              <Link href="/" className="active-link" title={t<string>('header_home')}>
                {t('header_home')}
              </Link>
            </li>
            <li className="group relative mx-5">
              <Link
                href="#"
                className="dropdown-toggle light-link pb-10 after:absolute after:top-[calc(50%-18px)] after:-ml-0.5 after:font-icons after:text-24px after:transition-all after:content-['\e688'] lg:group-hover:after:rotate-180"
                title={t<string>('header_blog_articles')}>
                {t('header_blog_articles')}
              </Link>
              <ul className="dropdown-menu hidden lg:group-hover:block">
                <li className="after:bg-blueColor">
                  <Link href="/blog-list" title="Blog CSS articles">
                    CSS
                  </Link>
                </li>
                <li className="after:bg-redColor">
                  <Link href="/blog-list" title="Blog HTML articles">
                    HTML
                  </Link>
                </li>
                <li className="after:bg-yellowColor">
                  <Link href="/blog-list" title="Blog Javascript articles">
                    Javascript
                  </Link>
                </li>
                <li className="after:bg-greenColor">
                  <Link href="/blog-list" title="Graphic">
                    Graphic
                  </Link>
                </li>
                <li>
                  <Link href="/blog-list" title={t<string>('header_blog_posts')}>
                    {t('header_blog_posts')}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mx-5">
              <Link href="/about-me" className="light-link" title={t<string>('header_about')}>
                {t('header_about')}
              </Link>
            </li>
            <li className="mx-5">
              <Link
                href="/portfolio"
                className="light-link"
                title={t<string>('header_my_projects')}>
                {t('header_my_projects')}
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/contact" className="light-link" title={t<string>('header_contact')}>
                {t('header_contact')}
              </Link>
            </li>
            <li className="buyproducts-link ml-auto flex">
              <i className="pe-7s-bookmarks mr-2.5 text-2xl"></i>
              <select
                onChange={handleLocaleChange}
                value={router.locale}
                className="group flex items-center bg-white text-secondary outline-none">
                <option value="en" className="group-hover:underline">
                  English
                </option>
                <option value="vi" className="group-hover:underline">
                  Vietnam
                </option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
})

export default AppHeader
