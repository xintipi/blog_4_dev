export interface IProjectResponse {
  id: string | number
  project_name: string
  tag_name: string
  description: string
  thumbnail: string
  alt_thumbnail: string
  preview: string
}

export interface IProjectSchema {
  _id: string
  tagId: string
  projectId: string
  projectName: string
  tagName: string
  description: string
  thumbnail: string
  altThumbnail: string
  preview: string
}

export interface ITagSchema {
  _id: string
  tagId: string
  name: string
  createdAt: string
}

export interface ITagResponse {
  tag: 'applications' | 'frameworks' | 'all'
}
