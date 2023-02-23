import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import { category } from '@/data/category'
import styles from '@/styles/modules/Portfolio.module.scss'

export default function Tabs({
  containerRender,
  query: queryProps,
}: {
  containerRender: ReactNode
  query: string
}) {
  const { t } = useTranslation('portfolio')
  const { query, pathname } = useRouter()
  return (
    <>
      <nav className={clsx(styles['menu-filter'], 'portfolio-menu')}>
        <ul className="flex flex-wrap md:flex-nowrap">
          {category.map((item, index) => (
            <li
              key={index}
              className={clsx({ [styles[item.defaultClass]]: queryProps === item.dataFilter })}>
              <Link
                href={{
                  pathname: pathname,
                  query: { ...query, tab: item.dataFilter },
                }}
                replace
                data-filter={item.dataFilter}
                title={item.title}>
                {t(item.title)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {containerRender}
    </>
  )
}
