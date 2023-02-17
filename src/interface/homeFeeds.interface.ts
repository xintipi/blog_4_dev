import { ImageLoaderProps } from 'next/image'

import { FeedsResponse } from '@/data/feeds'

export interface HomeFeedsInterface {
  images: ImageLoaderProps[]
  feeds: Partial<FeedsResponse[]>
}
