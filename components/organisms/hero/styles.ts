import styled from 'styled-components'

import Container from '@atoms/container'

export const HeroBackground = styled(Container)`
background: rgb(229,238,252);
background: linear-gradient(0deg, rgba(229,238,252,1) 0%, rgba(178,194,219,1) 25%, rgba(134,154,185,1) 50%, rgba(113,138,168,1) 75%, rgba(68,93,123,1) 100%);

`

export const StyledContainer = styled(Container)`
  height: 100vh;
  background-image: url(/img/bg.svg);
  background-attachment: fixed;
  background-size: cover;
`

export const HeroContainer = styled(Container)`
  display: grid;
  align-items: center;
  @media(min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
`