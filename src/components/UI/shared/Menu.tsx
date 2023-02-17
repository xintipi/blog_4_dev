import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { MouseEvent, useRef } from 'react'

import { DeviceDemension } from '@/enums/deviceDemension'
import { LanguageName } from '@/enums/languageName'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'

export default function Menu() {
  const articleRef = useRef<HTMLAnchorElement>(null)
  const dropdownMenuRef = useRef<HTMLUListElement>(null)

  const router = useRouter()
  const { t } = useTranslation('header')
  const { change } = useChangeLanguage()

  const onToggleMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (window.innerWidth < DeviceDemension.MaxWidth) {
      articleRef.current?.classList.toggle('show')
      dropdownMenuRef.current?.classList.toggle('show')
    }
  }

  return (
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
        <Link href="/portfolio" className="light-link" title={t<string>('header_my_projects')}>
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
          onChange={change}
          value={router.locale}
          className="change-language group flex items-center bg-white text-secondary outline-none">
          <option value="en" className="group-hover:underline">
            {LanguageName.English}
          </option>
          <option value="vi" className="group-hover:underline">
            {LanguageName.Vietnam}
          </option>
        </select>
      </li>
    </ul>
  )
}
