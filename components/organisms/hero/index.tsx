import Title from '@atoms/title'
import Grid from '@atoms/grid'
import Text from '@atoms/text'
import CoolCoding from '@atoms/svg/icons/coolcoding'

import { HeroBackground, HeroContainer, StyledContainer } from './styles'

const Hero: React.FC = () => {
  return(
    <HeroBackground>
      <StyledContainer>
        <HeroContainer>
          <Grid>
            <Text>Hello, I'm Gabriel Morales</Text>
            <Title>Front-end Developer</Title>
            <Text>Dedicated to creating web applications and learn something new every day</Text>
            <Text>2021</Text>
          </Grid>
          <Grid>

          <CoolCoding />
          </Grid>
        </HeroContainer>
      </StyledContainer>
    </HeroBackground>
  )
}

export default Hero