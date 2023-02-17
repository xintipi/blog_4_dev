import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HomeFeedSection from '@/components/Home/HomeFeedSection'
import AppLayout from '@/layouts/AppLayout'

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header'])),
    },
  }
}

export default function Home() {
  return (
    <AppLayout>
      <HomeFeedSection />
      <main>
        <div className="container mx-auto">
          <h1>Index</h1>
        </div>
      </main>
    </AppLayout>
  )
}
