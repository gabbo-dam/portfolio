import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
`
export const StyledTech = styled(Container)`
  display: grid;
  text-align: center;

  @media (min-width: 900px){
    grid-template-columns: repeat(7, 1fr);
  }
`