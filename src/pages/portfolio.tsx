import { GetStaticPropsContext } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import usePathOrigin from '@/hooks/usePathOrigin'
import AppLayout from '@/layouts/AppLayout'

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer', 'portfolio'])),
    },
  }
}

export default function Portfolio() {
  const ogUrl = usePathOrigin()
  return (
    <AppLayout
      title="Porfolio DEV"
      canonical={ogUrl}
      description="Welcome to my portfolio! I'm a front-end developer.
      My experience includes working with languages such as JavaScript, Html, Css, as well as frameworks like Vue, React, Nuxt, Next.
      Take a look at some of my projects to see my skills in action!"
      keywords="software development, engineering, javascript, vuejs, nuxtjs, reactjs, nextjs, blog, profile, cv, resume"
      openGraph={{
        type: 'website',
        siteName: 'Porfolio DEV',
        url: ogUrl,
        locale: i18n?.language === 'en' ? 'en_US' : 'vi_VN',
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <h1>Porfolio</h1>
    </AppLayout>
  )
}
