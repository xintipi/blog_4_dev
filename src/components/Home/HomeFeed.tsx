import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import styles from '@/styles/modules/HomeFeed.module.scss'

interface HomeFeedProps {
  title: string
  categoryTag: string
  bannerTime: string
  dateTime: string
  sourceImg: string
  altImage: string
}

export default function HomeFeed({
  title,
  categoryTag,
  bannerTime,
  dateTime,
  sourceImg,
  altImage,
}: HomeFeedProps) {
  const [isImageReady, setIsImageReady] = useState<boolean>(false)

  const onLoadCallBack = () => {
    setIsImageReady(true)
  }

  return (
    <div className={clsx(styles['banner-wrapper'])}>
      <Image
        onLoad={onLoadCallBack}
        src={sourceImg}
        alt={altImage}
        width="0"
        height="0"
        loading="lazy"
        sizes="100vw"
        className="h-auto w-full"
      />
      {isImageReady && (
        <Link href="/blog-post" className={clsx(styles.group)} title={title}>
          <div className={clsx(styles['banner-wrapper-content'])}>
            <h2 className="h2 text-white">{title}</h2>
            <span className={clsx(styles['category-tag'])}>{categoryTag}</span>
            <time dateTime={dateTime} className={clsx(styles['banner-time'])}>
              {bannerTime}
            </time>
          </div>
        </Link>
      )}
    </div>
  )
}
