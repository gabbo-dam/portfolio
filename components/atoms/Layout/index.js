import Head from 'next/head'
import { StyledLayout } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Poppins-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Poppins-Medium.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Poppins-SemiBold.ttf'
          as='font'
          crossOrigin=''
        />

        <title>Gabriel Morales</title>
      </Head>
      <StyledLayout>
        {children}
        <style jsx global>
          {`
            @font-face {
              font-family: 'Poppins';
              src: url('/fonts/Poppins-Regular.ttf');
              font-weight: 400;
              font-style: normal;
            }
            @font-face {
              font-family: 'Poppins';
              src: url('/fonts/Poppins-Medium.ttf');
              font-weight: 500;
              font-style: normal;
            }
            @font-face {
              font-family: 'Poppins';
              src: url('/fonts/Poppins-SemiBold.ttf');
              font-weight: 600;
              font-style: normal;
            }
          `}
        </style>
      </StyledLayout>
    </>
  )
}

export default Layout
