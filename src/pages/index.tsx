import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPlaiceholder } from 'plaiceholder'

import HomeFeedSection from '@/components/Home/HomeFeedSection'
import { feeds } from '@/data/feeds'
import usePathOrigin from '@/hooks/usePathOrigin'
import { IHomeFeeds } from '@/interface/homeFeeds.interface'
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
      ...(await serverSideTranslations(locale as string, ['header', 'footer'])),
    },
  }
}

export default function Home({ images, feeds }: IHomeFeeds) {
  const ogUrl = usePathOrigin()
  return (
    <AppLayout
      title="Home DEV"
      canonical={ogUrl}
      description="A constructive and inclusive social network for software developers. With you every step of your journey."
      keywords="software development, engineering, rails, javascript, ruby"
      openGraph={{
        type: 'website',
        siteName: 'Home DEV',
        url: ogUrl,
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
