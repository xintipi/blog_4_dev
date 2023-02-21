import '@/styles/index.scss'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'

import GoogleAnalytics from '@/components/UI/partials/GoogleAnalytics'
import { AppStore, wrapper } from '@/store'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />

      <GoogleAnalytics />

      <Provider store={store as AppStore}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  )
}

export default appWithTranslation(App)
