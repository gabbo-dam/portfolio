import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
`
export const StyledTech = styled(Container)`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);


  @media (min-width: 768px){
    grid-template-columns: repeat(7, 1fr);
  }
`