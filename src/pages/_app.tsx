import 'nprogress/nprogress.css'
import '@/styles/index.scss'
import 'isomorphic-fetch'

import { default as AbortController } from 'abort-controller'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

import GoogleAnalytics from '@/components/UI/partials/GoogleAnalytics'
import NProgress from '@/lib/ngprogress'
import { AppStore, wrapper } from '@/store'

Object.assign(globalThis, {
  AbortController,
})

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const router = useRouter()

  useEffect(() => {
    NProgress.options({ height: 4, color: '#1f6feb' })

    // do something when route change
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
  }, [router.events])

  return (
    <>
      <GoogleAnalytics />

      <Provider store={store as AppStore}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  )
}

export default appWithTranslation(App)
