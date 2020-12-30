import Theme from '@styles/Theme'
import GlobalStyles from '@styles/GlobalStyles'
import Layout from '@atoms/Layout'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}
