import Title from '@atoms/title'
import Text from '@atoms/text'

import { HeroBackground, HeroContainer, StyledContainer } from './styles'

const Hero: React.FC = () => {
  return(
    <HeroBackground>
      <StyledContainer>
        <HeroContainer>
          <Text>Hello, I'm Gabriel Morales</Text>
          <Title>Front-end Developer</Title>
          <Text>2021</Text>
          {/* <Text>Dedicated to creating web applications and learn something new every day</Text> */}
        </HeroContainer>
      </StyledContainer>
    </HeroBackground>
  )
}

export default Hero