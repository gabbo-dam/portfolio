import styled from 'styled-components'
import Title from '@atoms/title'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  
  width: 80%;
  margin: 0 auto ;
  background: #ffffff;
  border-radius: 30px;
  display: grid;
  align-items: center;

  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px){

  }
`
export const Background = styled(Container)`
  padding: 100px 0 0 0;
  margin: 0 0 50px 0;
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);

  
  @media (min-width: 768px){
    margin: 0 0 100px 0;

  }
`
export const TechBg = styled(Container)`

padding: 0 0 100px 0;

  @media (min-width: 768px){
    background: url(/img/bg-tech.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    padding: 0;

  }
`

export const StyledTech = styled(Container)`
  width: 90%;
  margin: 0 auto 50px auto;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
  @media (min-width: 768px){
    grid-template-columns: repeat(5, 1fr);
  }
`

export const StyledTitle = styled(Title)`
  text-align: center;
  margin: 50px 0;
  &:after{
    content: '';
    display:block;
    margin: 15px auto 0 auto;
    width:50px;
    height:7px;
    background: #FD749B;
    border-radius: 50px;
  }
`

export const Space = styled(Container)`
`