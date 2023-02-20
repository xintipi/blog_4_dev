import '@/styles/index.scss'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'

import GoogleAnalytics from '@/components/UI/partials/GoogleAnalytics'
import { Store, store } from '@/store'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />

      <GoogleAnalytics />

      <Provider store={store as Store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default appWithTranslation(App)
