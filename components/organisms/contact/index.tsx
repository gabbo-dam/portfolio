import Title from '@atoms/title'
import SvgText from '@molecules/svgtext'

import LinkedIn from '@atoms/svg/icons/linkedin'
import GitHub from '@atoms/svg/icons/github'
import Telegram from '@atoms/svg/icons/telegram'
import Instagram from '@atoms/svg/icons/instagram'
import BgTop from '@atoms/svg/icons/bg_contact_top'
import BgBottom from '@atoms/svg/icons/bg_contact_bottom'

import { StyledContainer, ContactContainer } from './styles'


const Contact: React.FC = () => {
  return(
    <StyledContainer>
      <BgTop />
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
      <BgBottom />
    </StyledContainer>
  )
}

export default Contact