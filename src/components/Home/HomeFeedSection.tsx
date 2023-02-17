import clsx from 'clsx'

import HomeFeed from '@/components/Home/HomeFeed'
import { HomeFeedsInterface } from '@/interface/homeFeeds.interface'

export default function HomeFeedSection({ images, feeds }: HomeFeedsInterface) {
  return (
    <section className="banners py-5 md:py-10">
      <div className="container mx-auto">
        <div className="grid gap-x-0 md:grid-cols-4 md:gap-x-6 lg:grid-cols-6">
          {feeds.map((data, index) => (
            <div
              key={index}
              className={clsx({
                'md:col-span-2 md:px-0': true,
                'lg:col-span-3': [0, 1].includes(index),
                'lg:col-span-2': index > 1,
              })}>
              <HomeFeed feed={data} image={images[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
