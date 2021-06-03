import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
`
export const ContactContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media(min-width: 768px){
    grid-template-columns: repeat(4, 1fr);

  }
`