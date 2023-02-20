export interface LanguageResponse {
  id: number
  sourceTarget: string
  title: string
  pathImg: string
}

export const languages: LanguageResponse[] = [
  {
    id: 1,
    sourceTarget: 'https://vuejs.org/',
    title: 'Vue',
    pathImg: 'https://github.com/devicons/devicon/raw/master/icons/vuejs/vuejs-original.svg',
  },
  {
    id: 2,
    sourceTarget: 'https://nuxtjs.org/',
    title: 'Nuxtjs',
    pathImg: 'https://github.com/devicons/devicon/raw/master/icons/nuxtjs/nuxtjs-original.svg',
  },
  {
    id: 3,
    sourceTarget: 'https://reactjs.org/',
    title: 'React',
    pathImg:
      'https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg',
  },
  {
    id: 4,
    sourceTarget: 'https://nextjs.org/',
    title: 'Nextjs',
    pathImg: 'https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original.svg',
  },
  {
    id: 5,
    sourceTarget: 'https://www.w3schools.com/html/',
    title: 'HTML5',
    pathImg: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg',
  },
  {
    id: 6,
    sourceTarget: 'https://www.w3schools.com/css/',
    title: 'CSS3',
    pathImg: 'https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg',
  },
  {
    id: 7,
    sourceTarget: 'https://www.w3schools.com/js/',
    title: 'Javascript',
    pathImg:
      'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg',
  },
  {
    id: 8,
    sourceTarget: 'https://www.typescriptlang.org/',
    title: 'Typescript',
    pathImg:
      'https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg',
  },
]
