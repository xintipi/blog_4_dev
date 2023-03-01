import { ImageLoaderProps } from 'next/image'

import { IFeedsResponse } from '@/data/feeds'

export interface IHomeFeeds {
  avatar?: ImageLoaderProps
  images: ImageLoaderProps[]
  feeds: Partial<IFeedsResponse[]>
}
