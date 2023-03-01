export const menu = [
  {
    id: 1,
    path: '/',
    relatedPath: [],
    activeLink: 'active-link',
    target: 'header_home',
    group: null,
  },
  {
    id: 2,
    path: null,
    relatedPath: [],
    activeLink: 'active-link',
    target: 'header_blog_articles',
    title: 'Blog articles',
    group: [
      {
        id: 'group1',
        path: '/blog-list',
        relatedPath: [],
        activeLink: 'active-link',
        target: 'header_css',
        title: 'Blog CSS articles',
        backgroundCss: 'blue',
      },
      {
        id: 'group2',
        path: '/blog-list',
        relatedPath: [],
        activeLink: 'active-link',
        target: 'header_html',
        title: 'Blog HTML articles',
        backgroundCss: 'red',
      },
      {
        id: 'group3',
        path: '/blog-list',
        relatedPath: [],
        activeLink: 'active-link',
        target: 'header_javascript',
        title: 'Blog Javascript articles',
        backgroundCss: 'yellow',
      },
      {
        id: 'group4',
        path: '/blog-list',
        relatedPath: [],
        activeLink: 'active-link',
        target: 'header_graphic',
        title: 'Graphic',
        backgroundCss: 'green',
      },
      {
        id: 'group5',
        path: '/blog-list',
        relatedPath: [],
        activeLink: 'active-link',
        target: 'header_blog_posts',
        title: 'Blog posts',
        backgroundCss: null,
      },
    ],
  },
  {
    id: 3,
    path: '/portfolio/all',
    relatedPath: ['/portfolio/all', '/portfolio/applications', '/portfolio/frameworks'],
    activeLink: 'active-link',
    target: 'header_portfolio',
    group: null,
  },
  {
    id: 4,
    path: '/about-me',
    relatedPath: [],
    activeLink: 'active-link',
    target: 'header_about',
    group: null,
  },
  {
    id: 5,
    path: '/contact',
    relatedPath: [],
    activeLink: 'active-link',
    target: 'header_contact',
    group: null,
  },
]
