import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { ReactNode, useEffect, useState } from 'react'

import { category } from '@/data/category'
import { usePrefetch } from '@/services/api/projectAPI'
import styles from '@/styles/modules/Portfolio.module.scss'

export default function Tabs({ containerRender }: { containerRender: ReactNode }) {
  const [tag, setTag] = useState<string | null>(null)
  const { t } = useTranslation('portfolio')
  const r = useRouter()

  const prefetchGetProjectByTag = usePrefetch('getProjectByTag')

  useEffect(() => {
    setTag(r.query?.tag as string)
  }, [r])

  const prefetchData = (tag: string) => {
    prefetchGetProjectByTag({ tag }, { force: true })
  }

  return (
    <>
      <nav className={clsx(styles['menu-filter'], 'portfolio-menu')}>
        <ul className="flex flex-wrap md:flex-nowrap">
          {category.length &&
            category.map((item, index) => (
              <li
                key={index}
                className={clsx({
                  [styles[item.defaultClass]]: tag === item.dataFilter,
                })}>
                <Link
                  href={`/portfolio/${item.dataFilter}`}
                  data-filter={item.dataFilter}
                  title={t<string>(item.title)}
                  onMouseEnter={() => prefetchData(item.dataFilter)}>
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
