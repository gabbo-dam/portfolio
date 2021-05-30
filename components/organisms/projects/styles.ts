import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
`
export const CardsContainer = styled(Container)`
  display: grid;
  gap: 20px;

  @media (min-width: 900px){
    grid-template-columns: repeat(4, 1fr);
  }
`