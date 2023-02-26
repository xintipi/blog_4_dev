export interface ILanguageResponse {
  id: string
  title: string
  source_target: string
  path_img: string
  created_at: string
}

export interface ILanguageSchema {
  _id: string
  sourceTarget: string
  title: string
  pathImg: string
  createdAt: string
}
