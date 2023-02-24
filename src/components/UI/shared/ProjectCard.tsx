import clsx from 'clsx'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { IProjectList } from '@/interface/portfolio.interface'
import styles from '@/styles/modules/Portfolio.module.scss'

interface IProjectCard {
  item: IProjectList
  image: ImageLoaderProps
}

export default function ProjectCard({ item, image }: IProjectCard) {
  const { t } = useTranslation('portfolio')
  return (
    <div className={clsx(styles['portfolio-item'], 'filter-item')} data-filter={item.tag}>
      <div className={clsx(styles['portfolio-item-wrapper'], styles['portfolio-item-default'])}>
        <div className={clsx(styles['portfolio-item-wrapper-left'])}>
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="h2">{item.project_name}</h2>
            <span className={clsx(styles['portfolio-category'])}>{item.tag?.toUpperCase()}</span>
          </div>
          <p className={clsx(styles['portfolio-text'])}>{item.desc}</p>
          {item.preview && (
            <Link
              className={clsx(styles['btn'], 'btn')}
              href={item.preview}
              target="_blank"
              title={item.project_name as string}>
              {t('portfolio_preview')}
            </Link>
          )}
        </div>
        <div className={clsx(styles['portfolio-item-wrapper-right'])}>
          <Image
            {...image}
            className="img-fluid h-full w-full object-contain"
            alt={item?.alt_thumbnail as string}
            width={0}
            height={0}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}
