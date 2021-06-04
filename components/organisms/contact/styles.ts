import styled from 'styled-components'

import Container from '@atoms/container'
import Title from '@atoms/title'


export const StyledContainer = styled(Container)`
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
`
export const ContactContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  @media(min-width: 768px){

  }
`
export const StyledTitle = styled(Title)`
  background-image: none;
  background-color: #ffffff;
  text-align: center;
  margin: 25px 0 ;
  @media(min-width: 768px){
  margin: 50px 0 ;
    

  }
`
export const ContactGrid = styled(Container)`

  display: grid;
  gap: 20px;
  margin: 0 0 25px 0 ;

  grid-template-columns: repeat(2, 1fr);
  @media(min-width: 768px){
    grid-template-columns: repeat(4, 1fr);
    margin: 0 0 50px 0 ;

  }
`