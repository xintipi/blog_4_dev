import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { MouseEvent, useRef } from 'react'
import { GrLanguage } from 'react-icons/gr'

import Language from '@/components/UI/shared/Language'
import { menu } from '@/data/menu'
import { DeviceDemension } from '@/enums/deviceDemension'

export default function Menu() {
  const articleRef = useRef<HTMLAnchorElement>(null)
  const dropdownMenuRef = useRef<HTMLUListElement>(null)

  const { pathname } = useRouter()
  const { t } = useTranslation('header')

  const onToggleMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (window.innerWidth < DeviceDemension.MaxWidth) {
      articleRef.current?.classList.toggle('show')
      dropdownMenuRef.current?.classList.toggle('show')
    }
  }

  return (
    <ul className="block lg:flex">
      {menu.length &&
        menu.map((item, index) => (
          <li
            key={index}
            className={clsx({
              'ml-0 mr-5': index === 0,
              'mx-5': index > 0,
              'group relative': index === 1,
            })}>
            {!item.group ? (
              <Link
                href={item.path}
                className={clsx({
                  'light-link': true,
                  'active-link': pathname === item.path,
                })}
                title={t<string>(item.target)}>
                {t(item.target)}
              </Link>
            ) : (
              <>
                <Link
                  href="#"
                  onClick={(event) => onToggleMenu(event)}
                  className="dropdown-toggle light-link pb-10 after:absolute after:top-[calc(50%-18px)] after:-ml-0.5 after:font-icons after:text-24px after:transition-all after:content-['\e688'] lg:group-hover:after:rotate-180"
                  title={item.title}>
                  {t(item.target)}
                </Link>
                <ul className="dropdown-menu hidden lg:group-hover:block" ref={dropdownMenuRef}>
                  {item.group.length &&
                    item.group.map((group, key) => (
                      <li key={key} className={group.backgroundCss as string}>
                        <Link href={group.path} title={group.title}>
                          {t(group.target)}
                        </Link>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </li>
        ))}
      <li className="buyproducts-link ml-auto flex items-center">
        <Language icon={<GrLanguage size={20} />} />
      </li>
    </ul>
  )
}
