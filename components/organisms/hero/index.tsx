import styled from 'styled-components'
import Container from '@atoms/container'
import CoolCoding from '@atoms/svg/icons/coolcoding'
import HeroFooter from '@atoms/svg/icons/herofooter'

import { Background, HeroContainer, StyledTitle, StyledText, StyledContainer, IconContainer, MobileContainer, Description } from './styles'

const Hero: React.FC = () => {
  return(
    <Background>
      <HeroContainer>
        <StyledContainer>
          <MobileContainer>
            <StyledText>Hello, I'm Gabriel Morales</StyledText>
            <StyledTitle>Front-end Developer</StyledTitle>
          </MobileContainer>
          <Description>Dedicated to creating web applications and learn something new every day</Description>
        </StyledContainer>
        <IconContainer>
          <CoolCoding />
        </IconContainer>
      </HeroContainer>
      <HeroFooter />
    </Background>
  )
}


export default Hero