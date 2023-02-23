import clsx from 'clsx'
import Image from 'next/image'

import { IProjectCard } from '@/pages/portfolio'
import styles from '@/styles/modules/Portfolio.module.scss'

export default function ProjectCard({ item }: { item: IProjectCard }) {
  return (
    <div className={clsx(styles['portfolio-item'], 'filter-item')} data-filter={item.tag}>
      <div
        className={clsx({
          [styles['portfolio-item-wrapper']]: true,
          [styles['portfolio-item-default']]: !item.thumbnail,
          'bg-portfolioGray': item.thumbnail,
        })}>
        <div className={clsx(styles['portfolio-item-wrapper-left'])}>
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="h2">{item.projectName}</h2>
            <span className={clsx(styles['portfolio-category'])}>{item.tag?.toUpperCase()}</span>
          </div>
          <p className={clsx(styles['portfolio-text'])}>{item.desc}</p>
        </div>
        {item.thumbnail && (
          <div className={clsx(styles['portfolio-item-wrapper-right'])}>
            <Image
              src={item.thumbnail}
              className="img-fluid"
              alt={item.altThumbnail as string}
              width={244}
              height={267}
              priority
            />
          </div>
        )}
      </div>
    </div>
  )
}
