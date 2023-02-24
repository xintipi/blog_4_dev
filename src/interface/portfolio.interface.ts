import { TGetImageSrc } from 'plaiceholder/dist/get-image'
import { Url } from 'url'

export interface IProjectList {
  id: string | number
  project_name: string
  tag: string
  desc: string
  thumbnail: string
  alt_thumbnail: string
  preview: string
}
