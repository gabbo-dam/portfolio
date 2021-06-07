import styled from 'styled-components'

import Text from '@atoms/text'
import Container from '@atoms/container'
import Title from '@atoms/title'


export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  @media (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    margin: -100px auto 0 auto;

  }
`
export const StyledTitle = styled(Title)`
  text-align: center;
  grid-column: 1 / 3;
`
export const GridHistory = styled(Container)`
  margin: 25px 0;
  align-items: center;
  @media (min-width: 768px){
    margin: 25px 0 50px 0;

  }

  display: grid;
  grid-column: 1 / 3;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: repeat(6, auto);
`
export const Right = styled(Container)`
  grid-column: 1 / 2;
  grid-row: 1 ;
  text-align: right;

`
export const Right2 = styled(Container)`
  grid-column: 1 / 2;
  grid-row: 3 / 4 ;
  text-align: right;

`
export const Right3 = styled(Container)`
  grid-column: 1 / 2;
  grid-row: 5 / 6 ;
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
export const Left2 = styled(Container)`
  grid-column: 3 / 4;
  grid-row: 4 / 5 ;

`

export const EducationText = styled(Text)`
  line-height: 40px;
  @media (min-width: 768px) {
  }
`