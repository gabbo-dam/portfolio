import GlobalStyles from '@styles/global'
import { AppProps } from 'next/app'
import Layout from '@templates/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <>
      <Layout>      
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
