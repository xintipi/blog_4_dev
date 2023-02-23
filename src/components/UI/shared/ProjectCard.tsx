import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { IProjectCard } from '@/pages/portfolio'
import styles from '@/styles/modules/Portfolio.module.scss'

export default function ProjectCard({ item }: { item: IProjectCard }) {
  const { t } = useTranslation('portfolio')
  return (
    <div className={clsx(styles['portfolio-item'], 'filter-item')} data-filter={item.tag}>
      <div className={clsx(styles['portfolio-item-wrapper'], styles['portfolio-item-default'])}>
        <div className={clsx(styles['portfolio-item-wrapper-left'])}>
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="h2">{item.projectName}</h2>
            <span className={clsx(styles['portfolio-category'])}>{item.tag?.toUpperCase()}</span>
          </div>
          <p className={clsx(styles['portfolio-text'])}>{item.desc}</p>
          {item.preview && (
            <Link
              className={clsx(styles['btn'], 'btn')}
              href={item.preview}
              target="_blank"
              title={item.projectName as string}>
              {t('portfolio_preview')}
            </Link>
          )}
        </div>
        {item.thumbnail && (
          <div className={clsx(styles['portfolio-item-wrapper-right'])}>
            <Image
              src={item.thumbnail}
              className="img-fluid h-full w-full object-contain"
              alt={item.altThumbnail as string}
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        )}
      </div>
    </div>
  )
}
