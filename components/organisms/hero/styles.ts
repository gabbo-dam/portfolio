import styled from 'styled-components'

import MainTitle from '@atoms/maintitle'
import Text from '@atoms/text'
import Container from '@atoms/container'


export const Background = styled(Container)`
  background: linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%);
  
`

export const HeroContainer = styled(Container)`
  width: 80%;
  height: 600px;
  margin: 0 auto;
  display: grid;
  align-items: center;

  @media(min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
`
export const StyledTitle = styled(MainTitle)`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0 0 15px 0;
`
export const StyledText = styled(Text)`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 32px;
  margin: 0 0 15px 0;
  line-height: 1.3em;
`

export const Description = styled(Text)`
  color: #ffffff;
  font-size: 15px;
  margin: 0 0 15px 0;
`
export const StyledContainer = styled(Container)`
  width: 100%;
  @media(min-width: 768px){
    width: 80%;
    margin: 0 auto;
  }
`
export const IconContainer = styled(Container)`
  grid-row: 1 / 2 ;

  @media(min-width: 768px){
    grid-colum: 2 / 3;
    grid-row: auto ;

  }
`
export const MobileContainer = styled(Container)`
  width: 50%;
  @media(min-width: 768px){
    width: 100%;

  }
`

