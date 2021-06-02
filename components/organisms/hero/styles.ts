import styled from 'styled-components'

import Title from '@atoms/title'
import Text from '@atoms/text'
import Container from '@atoms/container'

export const Background = styled(Container)`
  background: linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%);
`

export const HeroContainer = styled(Container)`
  width: 80%;
  height: 600px;
  margin: 0 auto;
  align-items: center;
  

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const StyledTitle = styled(Title)`
  color: #ffffff;
  text-transform: uppercase;
  font-size: ${({ size = '20px'}) => size};
  margin: 0 0 15px 0;
`
export const StyledText = styled(Text)`
  color: #ffffff;
  text-transform: uppercase;
  font-size: ${({ size = '15px'}) => size};
  margin: 0 0 15px 0;
  line-height: 1.5em;
`
export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
`

