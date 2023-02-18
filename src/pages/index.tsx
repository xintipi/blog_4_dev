import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'
import { useMemo } from 'react'

import HomeFeedSection from '@/components/Home/HomeFeedSection'
import { feeds } from '@/data/feeds'
import { Meta } from '@/enums/meta'
import { HomeFeedsInterface } from '@/interface/homeFeeds.interface'
import AppLayout from '@/layouts/AppLayout'

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
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
  const openGraph = useMemo(() => {
    return {
      title: process.env.NEXT_PUBLIC_APP_NAME,
      description: Meta.Description,
      keywords: Meta.Keywords,
      url: process.env.NEXT_PUBLIC_DOMAIN,
      type: 'website',
      siteName: process.env.NEXT_PUBLIC_APP_NAME,
      newFeeds: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
    }
  }, [])

  return (
    <AppLayout
      title={process.env.NEXT_PUBLIC_APP_NAME}
      canonical={process.env.NEXT_PUBLIC_DOMAIN}
      openGraph={openGraph}
      description={Meta.Description}>
      <HomeFeedSection images={images} feeds={feeds} />

      <main>
        <div className="container mx-auto">
          <h1>Index</h1>
        </div>
      </main>
    </AppLayout>
  )
}
