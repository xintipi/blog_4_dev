import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { MouseEvent, useRef } from 'react'
import { GrLanguage } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'

import Language from '@/components/UI/shared/Language'
import { menu } from '@/data/menu'
import { DeviceDemension } from '@/enums/deviceDemension'
import { aboutAPI } from '@/services/api/aboutAPI'
import { projectAPI } from '@/services/api/projectAPI'

const menuClassMap = {
  blue: {
    classes: 'after:bg-blueColor',
  },
  red: {
    classes: 'after:bg-redColor',
  },
  yellow: {
    classes: 'after:bg-yellowColor',
  },
  green: {
    classes: 'after:bg-greenColor',
  },
}

export default function Menu() {
  const articleRef = useRef<HTMLAnchorElement>(null)
  const dropdownMenuRef = useRef<HTMLUListElement>(null)

  const { pathname } = useRouter()
  const router = useRouter()
  const { t } = useTranslation('header')

  const prefetchGetLanguageList = aboutAPI.usePrefetch('getLanguageList')
  const prefetchGetProjectByTag = projectAPI.usePrefetch('getProjectByTag')

  const refetchData = (path: string) => {
    path === '/about-me' && prefetchGetLanguageList(undefined, { force: true })
    path === '/portfolio/all' && prefetchGetProjectByTag({ tag: 'all' }, { force: true })
  }

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
              'group relative pb-2': index === 1,
            })}>
            {!item.group ? (
              <Link
                href={item.path}
                className={clsx({
                  'light-link': true,
                  'active-link': item.relatedPath.length
                    ? item.relatedPath.includes(router.asPath)
                    : pathname === item.path,
                })}
                title={t<string>(item.target)}
                onMouseEnter={() => refetchData(item.path)}>
                {t(item.target)}
              </Link>
            ) : (
              <>
                <Link
                  href="#"
                  onClick={(event) => onToggleMenu(event)}
                  className="dropdown-toggle"
                  title={item.title}>
                  {t(item.target)}
                  <IoIosArrowDown
                    className="absolute right-0 -ml-3 transform
                  transition duration-300 ease-in-out sm:top-[calc(50%-8px)] lg:top-[calc(50%-12px)] lg:-right-[20px] lg:group-hover:rotate-180"
                  />
                </Link>
                <ul className="dropdown-menu lg:group-hover:block" ref={dropdownMenuRef}>
                  {item.group.length &&
                    item.group.map((group, key) => (
                      <li
                        key={key}
                        className={
                          menuClassMap[group.backgroundCss as keyof typeof menuClassMap]?.classes
                        }>
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
      <li className="buyproducts-link ml-auto flex items-start">
        <Language icon={<GrLanguage size={20} />} />
      </li>
    </ul>
  )
}
