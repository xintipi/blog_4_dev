export interface FeedsResponse {
  id: number
  title: string
  categoryTag: string
  dateTime: string
  bannerTime: string
  thumbnailUrl: string
  thumbnailAlt: string
}

export const feeds: FeedsResponse[] = [
  {
    id: 1,
    title: 'Leveling up in CSS',
    categoryTag: 'CSS',
    dateTime: '2022-01-18',
    bannerTime: 'January 18, 2022',
    thumbnailUrl: 'https://i.ibb.co/9tzm1Hy/photo1-2x.webp',
    thumbnailAlt: 'Post Photo',
  },
  {
    id: 2,
    title: 'Evolving the Google Identity',
    categoryTag: 'Graphic',
    dateTime: '2022-01-18',
    bannerTime: 'January 18, 2022',
    thumbnailUrl: 'https://i.ibb.co/9ZjXQcf/photo2-2x.webp',
    thumbnailAlt: 'Post Photo',
  },
  {
    id: 3,
    title: 'Angular 2 versus React: There Will Be Blood',
    categoryTag: 'JAVASCRIPT',
    dateTime: '2022-03-01',
    bannerTime: 'March 1, 2022',
    thumbnailUrl: 'https://i.ibb.co/s3Yz8bQ/photo3-2x.webp',
    thumbnailAlt: 'Post Photo',
  },
  {
    id: 4,
    title: 'The End of Global CSS',
    categoryTag: 'HTML',
    dateTime: '2022-01-18',
    bannerTime: 'January 18, 2022',
    thumbnailUrl: 'https://i.ibb.co/J2xp6w4/photo4-2x.webp',
    thumbnailAlt: 'Post Photo',
  },
  {
    id: 5,
    title: 'Building an CSS Framework',
    categoryTag: 'CSS',
    dateTime: '2022-01-18',
    bannerTime: 'January 18, 2022',
    thumbnailUrl: 'https://i.ibb.co/TYS3nmS/photo5-2x.webp',
    thumbnailAlt: 'Post Photo',
  },
]
