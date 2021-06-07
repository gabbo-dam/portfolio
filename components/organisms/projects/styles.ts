import styled from 'styled-components'
import Title from '@atoms/title'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto 20px auto;
  
`
export const CardsContainer = styled(Container)`
  display: grid;
  gap: 20px;


  @media (min-width: 768px){
    grid-template-columns: repeat(4, 1fr);
  }
`
export const StyledTitle = styled(Title)`
  text-align: center;
  margin: 50px 0 25px 0 ;
  height: 40px;


  @media (min-width: 768px){
    margin: 50px 0 ;
  }
`