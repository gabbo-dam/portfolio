import Head from 'next/head'
import { StyledLayout } from './styles'

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/logo.svg" />
        <title>Gabriel Morales</title>
      </Head>
      <StyledLayout>
        {props.children}
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap');
          `}
        </style>
      </StyledLayout>
    </>
  )
}

export default Layout
