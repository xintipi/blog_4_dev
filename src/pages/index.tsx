import { GetStaticProps, GetStaticPropsContext } from 'next'
import { i18n } from 'next-i18next'
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
      description="Let's learn about the wonders of technology. Be it tutorials on web development, IT, or hiring a front-end developer and then what are waiting for?, let do it!"
      keywords="software development, engineering, javascript, vuejs, nuxtjs, reactjs, nextjs, blog, profile, cv, resume"
      openGraph={{
        type: 'website',
        siteName: 'Home DEV',
        url: ogUrl,
        locale: i18n?.language === 'en' ? 'en_US' : 'vi_VN',
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
