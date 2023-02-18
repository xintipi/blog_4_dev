import clsx from 'clsx'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { FeedsResponse } from '@/data/feeds'
import styles from '@/styles/modules/HomeFeed.module.scss'

interface HomeFeed {
  feed: FeedsResponse | undefined
  image: ImageLoaderProps
}

export default function HomeFeed({ feed, image }: HomeFeed) {
  const [isImageReady, setIsImageReady] = useState<boolean>(false)

  return (
    <div className={clsx(styles['banner-wrapper'])}>
      {isImageReady && (
        <Link href="/blog-post" className={clsx(styles.group)} title={feed?.title}>
          <div className={clsx(styles['banner-wrapper-content'])}>
            <h2 className="h2 text-white">{feed?.title}</h2>
            <span className={clsx(styles['category-tag'])}>{feed?.categoryTag}</span>
            <time dateTime={feed?.dateTime} className={clsx(styles['banner-time'])}>
              {feed?.bannerTime}
            </time>
          </div>
        </Link>
      )}
      <Image
        {...image}
        alt={feed?.thumbnailAlt as string}
        placeholder="blur"
        priority
        onLoad={() => setIsImageReady(true)}
      />
    </div>
  )
}
