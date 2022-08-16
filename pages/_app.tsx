import type { AppProps } from 'next/app'
import { Layout } from '@components'
import '@styles/reset.scss'
import '@styles/values.scss'
import '@styles/fonts.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
