
import Grid from '@atoms/grid'
import CoolCoding from '@atoms/svg/icons/coolcoding'
import HeroFooter from '@atoms/svg/icons/herofooter'

import { Background, HeroContainer,StyledTitle, StyledText, StyledContainer } from './styles'

const Hero: React.FC = () => {
  return(
    <Background>
      <HeroContainer>
        <Grid col='1 / 2'>
          <StyledContainer>
            <StyledText size='32px'>Hello, I'm Gabriel Morales</StyledText>
            <StyledTitle>Front-end Developer</StyledTitle>
            <StyledText>Dedicated to creating web applications and learn something new every day</StyledText>
            <StyledText>2021</StyledText>
          </StyledContainer>
        </Grid>
        <Grid col='2 / 3'>
          <CoolCoding />
        </Grid>
      </HeroContainer>
      <HeroFooter />
    </Background>
  )
}

export default Hero