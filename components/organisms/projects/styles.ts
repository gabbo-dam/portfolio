import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
`
export const CardsContainer = styled(Container)`
  display: grid;
  gap: 20px;


  @media (min-width: 768px){
    grid-template-columns: repeat(4, 1fr);
  }
`