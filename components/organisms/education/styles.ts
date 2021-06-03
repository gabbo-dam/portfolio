import styled from 'styled-components'

import Text from '@atoms/text'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  @media (min-width: 768px){
    grid-template-columns: repeat(2, 1fr)
  }
`
export const GridHistory = styled(Container)`
  display: grid;
  grid-column: 1 / 3;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: repeat(6, 1fr);
`
export const Right = styled(Container)`
  grid-column: 1 / 2;
  grid-row: 1 ;
  text-align: right;

`
export const Center = styled(Container)`
  margin: 0 auto;
  grid-column: 2 / 3;
  grid-row: 1 / 6 ;
`
export const Left = styled(Container)`
  grid-column: 3 / 4;
  grid-row: 2 / 3 ;

`

export const EducationText = styled(Text)`
  line-height: 40px;
  @media (min-width: 768px) {
  }
`