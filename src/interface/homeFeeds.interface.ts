import { ImageLoaderProps } from 'next/image'

import { IFeedsResponse } from '@/data/feeds'

export interface IHomeFeeds {
  images: ImageLoaderProps[]
  feeds: Partial<IFeedsResponse[]>
}
