import { GetStaticPropsContext } from 'next'
import { ImageLoaderProps } from 'next/image'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'

import PortfolioSection from '@/components/UI/partials/PortfolioSection'
import usePathOrigin from '@/hooks/usePathOrigin'
import { IProjectList } from '@/interface/portfolio.interface'
import AppLayout from '@/layouts/AppLayout'
import { getProjectByTag, getTagList } from '@/services/api/projectAPI'
import { AppStore, makeStore, wrapper } from '@/store'

export const getStaticPaths = async () => {
  const store = makeStore()

  const getTagListQueryResult = await store.dispatch(getTagList.initiate())
  const { data } = await getTagListQueryResult

  const newData = [...new Set(data)]

  const paths = newData.map((tag) => ({ params: { tag } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = wrapper.getStaticProps(
  (store: AppStore) =>
    async ({ params, locale }: GetStaticPropsContext) => {
      try {
        const getProjectByTagQueryResult = await store.dispatch(
          getProjectByTag.initiate({ tag: params?.tag as string })
        )
        const { data } = await getProjectByTagQueryResult

        const images = await Promise.all(
          (data as IProjectList[]).map(async (data) => {
            const { base64, img } = await getPlaiceholder(data.thumbnail)
            return { ...img, blurDataURL: base64 }
          })
        )

        return {
          props: {
            images,
            data,
            ...(await serverSideTranslations(locale as string, ['header', 'footer', 'portfolio'])),
          },
        }
      } catch (_) {
        return {
          notFound: true,
        }
      }
    }
)

type PortfolioProps = {
  images: ImageLoaderProps[]
  data: IProjectList[]
}

export default function PortfolioSingle({ images, data }: PortfolioProps) {
  const ogUrl = usePathOrigin()
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
          <PortfolioSection data={data} images={images} />
        </div>
      </main>
    </AppLayout>
  )
}
