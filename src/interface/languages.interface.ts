import { ImageLoaderProps } from 'next/image'

import { LanguageResponse } from '@/data/languages'

export interface LanguagesInterface {
  images: ImageLoaderProps[]
  languages: Partial<LanguageResponse[]>
}
