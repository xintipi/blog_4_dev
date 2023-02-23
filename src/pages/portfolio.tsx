import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useMemo, useState } from 'react'

import PortfolioSection from '@/components/UI/partials/PortfolioSection'
import { project } from '@/data/project'
import usePathOrigin from '@/hooks/usePathOrigin'
import AppLayout from '@/layouts/AppLayout'

export type IKeyProject = 'projectName' | 'tag' | 'desc' | 'thumbnail' | 'altThumbnail'

export type IProjectCard = Record<Partial<IKeyProject>, string | null>

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer', 'portfolio'])),
    },
  }
}

export default function Portfolio() {
  const [tmpQuery, setTmpQuery] = useState<string | undefined>()
  const ogUrl = usePathOrigin()
  const router = useRouter()

  const transformData = useMemo(() => {
    const urlParams = new URLSearchParams(`?${router.asPath.split('?')[1]}`)
    const query = router?.query?.tab ?? urlParams.get('tab')

    setTmpQuery(query as string)

    const deepArr = new Map(Object.entries(JSON.parse(JSON.stringify(project))))

    const newArr = [...deepArr.entries()].reduce((acc, [key, value]) => {
      if (query === 'all') return deepArr
      if (query === (value as IProjectCard)['tag']) {
        acc.set(key, value)
      }
      return acc
    }, new Map())

    return [...newArr.values()]
  }, [router?.query?.tab, router.locale])

  return (
    <AppLayout
      title="Porfolio DEV"
      canonical={ogUrl}
      description="Welcome to my portfolio! I'm a front-end developer.
      My experience includes working with languages such as JavaScript, Html, Css, as well as frameworks like Vue, React, Nuxt, Next."
      keywords="software development, engineering, javascript, vuejs, nuxtjs, reactjs, nextjs, blog, profile, cv, resume"
      openGraph={{
        type: 'website',
        siteName: 'Porfolio DEV',
        url: ogUrl,
        locale: i18n?.language === 'en' ? 'en_US' : 'vi_VN',
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <main className="my-10">
        <div className="container mx-auto">
          <PortfolioSection data={transformData} query={tmpQuery as string} />
        </div>
      </main>
    </AppLayout>
  )
}
