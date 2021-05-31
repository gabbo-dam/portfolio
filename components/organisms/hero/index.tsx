import Title from '@atoms/title'
import Text from '@atoms/text'
import Grid from '@atoms/grid'
import CoolCoding from '@atoms/svg/icons/coolcoding'
import HeroFooter from '@atoms/svg/icons/herofooter'

import { Background, HeroContainer } from './styles'

const Hero: React.FC = () => {
  return(
    <Background>
      <HeroContainer>
        <Grid col='1 / 2'>
          <Text>Hello, I'm Gabriel Morales</Text>
          <Title>Front-end Developer</Title>
          <Text>Dedicated to creating web applications and learn something new every day</Text>
          <Text>2021</Text>
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