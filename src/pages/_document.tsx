import Document, {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
import clsx from 'clsx'
import styles from '@/styles/modules/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface ExtendDocumentProps extends DocumentInitialProps {
  lang: string
}

class MyDocument extends Document<DocumentProps | unknown> {
  static async getInitialProps(ctx: DocumentContext): Promise<ExtendDocumentProps> {
    const originalRenderPage = ctx.renderPage
    const initialProps = await Document.getInitialProps(ctx)
    const { query } = ctx
    const lang = (query.lang as string) ?? 'en'

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />,
        })
    } catch (error) {
      throw error
    }
    return {
      ...initialProps,
      lang,
      styles: <>{initialProps.styles}</>,
    }
  }

  render() {
    // @ts-ignore
    const { lang } = this.props
    return (
      <Html dir={lang === 'en' ? 'ltr' : 'rtl'}>
        <Head>
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
