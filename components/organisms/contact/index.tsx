import Title from '@atoms/title'
import SvgText from '@molecules/svgtext'

import LinkedIn from '@atoms/svg/icons/linkedin'
import GitHub from '@atoms/svg/icons/github'
import Telegram from '@atoms/svg/icons/telegram'
import Instagram from '@atoms/svg/icons/instagram'

import { StyledContainer, ContactContainer } from './styles'


const Contact: React.FC = () => {
  return(
    <StyledContainer>
      <Title>Contact Me!</Title>
      <ContactContainer>

      <SvgText
      text='linkedIn'
      >
        <LinkedIn />
      </SvgText>
      <SvgText
      text='GitHub'
      >
        <GitHub />
      </SvgText>
      <SvgText
      text='Telegram'
      >
        <Telegram />
      </SvgText>
      <SvgText
      text='Instagram'
      >
        <Instagram />
      </SvgText>

      </ContactContainer>
    </StyledContainer>
  )
}

export default Contact