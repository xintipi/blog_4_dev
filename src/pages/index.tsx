import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'

import HomeFeedSection from '@/components/Home/HomeFeedSection'
import { feeds } from '@/data/feeds'
import { Meta } from '@/enums/meta'
import { HomeFeedsInterface } from '@/interface/homeFeeds.interface'
import AppLayout from '@/layouts/AppLayout'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const images = await Promise.all(
    feeds.slice(0, 5).map(async (data) => {
      const { base64, img } = await getPlaiceholder(data.thumbnailUrl)
      return {
        ...img,
        blurDataURL: base64,
      }
    })
  ).then((value) => value)

  return {
    props: {
      images,
      feeds,
      ...(await serverSideTranslations(locale as string, ['common', 'header'])),
    },
  }
}

export default function Home({ images, feeds }: HomeFeedsInterface) {
  return (
    <AppLayout
      title={process.env.NEXT_PUBLIC_APP_NAME}
      canonical={process.env.NEXT_PUBLIC_DOMAIN}
      description={Meta.Description}
      keywords={Meta.Keywords}
      openGraph={{
        type: 'website',
        title: process.env.NEXT_PUBLIC_APP_NAME,
        description: Meta.Description,
        url: process.env.NEXT_PUBLIC_DOMAIN,
        siteName: process.env.NEXT_PUBLIC_APP_NAME,
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <HomeFeedSection images={images} feeds={feeds} />

      <main>
        <div className="container mx-auto">
          <h1>Index</h1>
        </div>
      </main>
    </AppLayout>
  )
}
