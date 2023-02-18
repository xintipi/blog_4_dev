import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Meta } from '@/enums/meta'
import AppLayout from '@/layouts/AppLayout'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header'])),
    },
  }
}

export default function Contact() {
  return (
    <AppLayout
      title="Contact DEV Blog 👩‍💻👨‍💻"
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
      <h1>contact me</h1>
    </AppLayout>
  )
}
