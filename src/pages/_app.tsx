import '@/styles/index.scss'

import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import GoogleAnalytics from '@/components/UI/partials/GoogleAnalytics'
import { Store, store } from '@/store'

const App = ({ Component, pageProps }: AppProps) => {
  const [pageTitle, setPageTitle] = useState<string>('')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (document.title) {
      setPageTitle(document.title)
    }
  }, [pathname])

  useEffect(() => {
    const handleRouteChange = () => {
      document.documentElement.removeAttribute('class')
    }
    router.events.on('routeChangeStart', handleRouteChange)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <GoogleAnalytics pageTitle={pageTitle} />

      <NextNProgress options={{ showSpinner: false }} />

      <Provider store={store as Store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default appWithTranslation(App)
