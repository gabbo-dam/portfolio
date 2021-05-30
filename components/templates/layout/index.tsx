import Head from 'next/head'
import { StyledLayout } from './styles'

const Layout = (props:any) => {
  return (
    <>
      <Head>
        <title>Gabriel Morales</title>
      </Head>
      <StyledLayout>
        {props.children}
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto&family=Teko&display=swap');
          `}
        </style>
      </StyledLayout>
    </>
  )
}

export default Layout
