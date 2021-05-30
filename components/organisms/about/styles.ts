import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  padding: 200px 0 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
`
export const InterestContainer = styled(Container)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);


  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
