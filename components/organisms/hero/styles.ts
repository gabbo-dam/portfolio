import styled from 'styled-components'

import Container from '@atoms/container'

export const Background = styled(Container)`
  background: linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%);
`



export const HeroContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  display: grid;

  @media(min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
`

