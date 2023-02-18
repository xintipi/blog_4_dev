import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useMemo } from 'react'

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
      title="Contact DEV Blog 👩‍💻👨‍💻"
      canonical={process.env.NEXT_PUBLIC_DOMAIN}
      openGraph={openGraph}
      description={Meta.Description}>
      <h1>contact me</h1>
    </AppLayout>
  )
}
