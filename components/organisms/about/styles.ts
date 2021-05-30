import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
`
export const InterestContainer = styled(Container)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);


  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
