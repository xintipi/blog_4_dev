import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'

import GoogleAnalytics from '@/components/UI/partials/GoogleAnalytics'
import { Store, store } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  const [pageTitle, setPageTitle] = useState<string>('')
  const pathname = usePathname()
  const { query } = useRouter()
  const lang = (query.lang as string) ?? 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    if (document.title) {
      setPageTitle(document.title)
    }
  }, [pathname])

  return (
    <>
      <GoogleAnalytics pageTitle={pageTitle} />
      <NextNProgress color="rgb(33,33,33)" height={3} options={{ showSpinner: false }} />
      <Provider store={store as Store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
