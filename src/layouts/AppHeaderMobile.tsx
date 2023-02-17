import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { ChangeEvent, MouseEvent, useRef } from 'react'

import { LanguageName } from '@/enums/languageName'

interface HeaderMobileProps {
  mobileNav: boolean
}

export default function AppHeaderMobile({ mobileNav }: HeaderMobileProps) {
  const articleRef = useRef<HTMLAnchorElement>(null)
  const dropdownMenuRef = useRef<HTMLUListElement>(null)

  const router = useRouter()
  const { t } = useTranslation('header')

  const onToggleMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    articleRef.current?.classList.toggle('show')
    dropdownMenuRef.current?.classList.toggle('show')
  }

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    router
      .push(router.route, router.asPath, {
        locale: value,
      })
      .then((r) => r)
  }

  return (
    <nav
      className={clsx({
        'mobile-nav header-nav': true,
        'mobile-nav-open': mobileNav,
      })}>
      <div className="container mx-auto">
        <div id="mobile-menu">
          <ul className="block lg:flex">
            <li className="ml-0 mr-5">
              <Link href="/" className="active-link" title={t<string>('header_home')}>
                {t('header_home')}
              </Link>
            </li>
            <li className="group relative mx-5">
              <Link
                href="#"
                onClick={(event) => onToggleMenu(event)}
                ref={articleRef}
                className="dropdown-toggle light-link pb-10 after:absolute after:top-[calc(50%-18px)] after:-ml-0.5 after:font-icons after:text-24px after:transition-all after:content-['\e688'] lg:group-hover:after:rotate-180"
                title={t<string>('header_blog_articles')}>
                {t('header_blog_articles')}
              </Link>
              <ul className="dropdown-menu hidden lg:group-hover:block" ref={dropdownMenuRef}>
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
                className="change-language group flex items-center bg-white text-secondary outline-none">
                <option value="en" className="group-hover:underline">
                  {LanguageName.English}
                </option>
                <option value="vi" className="group-hover:underline">
                  {LanguageName.Vietnamese}
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
