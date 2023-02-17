import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/modules/HomeFeedSection.module.scss'

export default function HomeFeedSection() {
  return (
    <section className="banners py-5 md:py-10">
      <div className="container mx-auto">
        <div className="grid gap-x-0 md:grid-cols-4 md:gap-x-6 lg:grid-cols-6">
          <div className="md:col-span-2 md:px-0 lg:col-span-3">
            <div className={clsx(styles['banner-wrapper'])}>
              <Link href="/blog-post" className="group" title="Leveling up in CSS">
                <div className={clsx(styles['banner-wrapper-content'])}>
                  <h2 className="h2 text-white">Leveling up in CSS</h2>
                  <span className={clsx(styles['category-tag'])}>CSS</span>
                  <time dateTime="2022-01-18" className={clsx(styles['banner-time'])}>
                    January 18, 2022
                  </time>
                </div>
              </Link>
              <Image
                src="/img/webp/photo1_2x.webp"
                alt="Post Photo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-3">
            <div className={clsx(styles['banner-wrapper'])}>
              <Link href="/blog-post" className="group" title="Evolving the Google Identity">
                <div className={clsx(styles['banner-wrapper-content'])}>
                  <h2 className="h2 text-white">Evolving the Google Identity</h2>
                  <span className={clsx(styles['category-tag'])}>Graphic</span>
                  <time dateTime="2022-01-18" className={clsx(styles['banner-time'])}>
                    January 18, 2022
                  </time>
                </div>
              </Link>
              <Image
                src="/img/webp/photo2_2x.webp"
                alt="Post Photo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-2">
            <div className={clsx(styles['banner-wrapper'])}>
              <Link
                href="/blog-post"
                className="group"
                title="Angular 2 versus React: There Will Be Blood">
                <div className={clsx(styles['banner-wrapper-content'])}>
                  <h2 className="h2 text-white">Angular 2 versus React: There Will Be Blood</h2>
                  <span className={clsx(styles['category-tag'])}>JAVASCRIPT</span>
                  <time dateTime="2022-03-01" className={clsx(styles['banner-time'])}>
                    March 1, 2022
                  </time>
                </div>
              </Link>
              <Image
                src="/img/webp/photo3_2x.webp"
                alt="Post Photo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-2">
            <div className={clsx(styles['banner-wrapper'])}>
              <Link href="/blog-post" className="group" title="The End of Global CSS">
                <div className={clsx(styles['banner-wrapper-content'])}>
                  <h2 className="h2 text-white">The End of Global CSS</h2>
                  <span className={clsx(styles['category-tag'])}>HTML</span>
                  <time dateTime="2022-01-18" className={clsx(styles['banner-time'])}>
                    January 18, 2022
                  </time>
                </div>
              </Link>
              <Image
                src="/img/webp/photo4_2x.webp"
                alt="Post Photo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2 md:px-0 lg:col-span-2">
            <div className={clsx(styles['banner-wrapper'])}>
              <Link href="/blog-post" className="group" title="Building an CSS Framework">
                <div className={clsx(styles['banner-wrapper-content'])}>
                  <h2 className="h2 text-white">Building an CSS Framework</h2>
                  <span className={clsx(styles['category-tag'])}>CSS</span>
                  <time dateTime="2022-01-18" className={clsx(styles['banner-time'])}>
                    January 18, 2022
                  </time>
                </div>
              </Link>
              <Image
                src="/img/webp/photo5_2x.webp"
                alt="Post Photo"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
