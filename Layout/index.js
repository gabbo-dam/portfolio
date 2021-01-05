import Head from 'next/head'
import { StyledLayout } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/PlayfairDisplay-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PlayfairDisplay-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PlayfairDisplay-Bold.ttf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/IBMPlexMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexMono-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexMono-Bold.ttf"
          as="font"
          crossOrigin=""
        />

        <title>Gabriel Morales</title>
      </Head>
      <StyledLayout>
        {children}
        <style jsx global>
          {`
            @font-face {
              font-family: 'Playfair Display', serif;
              src: url('/fonts/PlayfairDisplay-Regular.ttf');
              font-weight: 400;
              font-style: normal;
            }
            @font-face {
              font-family: 'Playfair Display', serif;
              src: url('/fonts/PlayfairDisplay-Medium.ttf');
              font-weight: 500;
              font-style: normal;
            }
            @font-face {
              font-family: 'Playfair Display', serif;
              src: url('/fonts/PlayfairDisplay-Bold.ttf');
              font-weight: 700;
              font-style: normal;
            }

            @font-face {
              font-family: 'IBM Plex Mono', monospace;
              src: url('/fonts/IBMPlexMono-Regular.ttf');
              font-weight: 400;
              font-style: normal;
            }
            @font-face {
              font-family: 'IBM Plex Mono', monospace;
              src: url('/fonts/IBMPlexMono-Medium.ttf');
              font-weight: 500;
              font-style: normal;
            }
            @font-face {
              font-family: 'IBM Plex Mono', monospace;
              src: url('/fonts/IBMPlexMono-Bold.ttf');
              font-weight: 700;
              font-style: normal;
            }
          `}
        </style>
      </StyledLayout>
    </>
  )
}

export default Layout
