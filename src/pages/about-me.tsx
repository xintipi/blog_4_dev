import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import usePathOrigin from '@/hooks/usePathOrigin'
import AppLayout from '@/layouts/AppLayout'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'footer'])),
    },
  }
}

export default function AboutMe() {
  const ogUrl = usePathOrigin()
  return (
    <AppLayout
      title="About DEV"
      canonical={ogUrl}
      description="About DEV — DEV Blog 👩‍💻👨‍💻"
      keywords="software development, engineering, rails, javascript, ruby"
      openGraph={{
        type: 'website',
        siteName: process.env.NEXT_PUBLIC_APP_NAME,
        url: ogUrl,
        images: [{ url: 'https://i.ibb.co/DK3fYhV/6hqmcjaxbgbon8ydw93z.png' }],
      }}>
      <h1>about me</h1>
    </AppLayout>
  )
}
