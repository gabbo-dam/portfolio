import Title from '@atoms/title'
import Text from '@atoms/text'
import Coding from '@atoms/svg/icons/coding'
import Container from '@atoms/container'
import Grid from '@atoms/grid'
import SvgText from '@molecules/svgtext'

import { StyledContainer, InterestContainer } from './styles'


const About: React.FC = () => {
  return(
    <StyledContainer>
      <Container>
        <Title>About me</Title>
        <Text>Hi I'm Gabriel, Front-end Developer based in Houston Texas. Passionate about education and technology, which leads me to be in constant learning and growth. I dedicated myself to create web applications and interfaces, give them functionality. Programming and learn are one of the things I like the most.</Text>
      </Container>

      <Coding />

      <Grid col='1 / 3'>
        <Title>Interests</Title>
        <Text>My interests are focused on technology, music, entertainment and problem solving. Strategy games and puzzles are my favorites ways of entertainment. In my free time I play guitar, watch series, read and workout. I am looking for new professional challenges where I can gain experience working with amazing developers and growth with them as a team</Text>
      </Grid>
      <Grid col='1 / 3'>
        <InterestContainer>
          <SvgText text='Technology'>
            <Coding />
          </SvgText>
          <SvgText text='Music'>
            <Coding />
          </SvgText>
          <SvgText text='Read'>
            <Coding />
          </SvgText>
          <SvgText text='Work Out'>
            <Coding />
          </SvgText>
          <SvgText text='Entretainment'>
            <Coding />
          </SvgText>

        </InterestContainer>
      </Grid>

    </StyledContainer>
  )
}

export default About