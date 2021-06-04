import SvgText from '@molecules/svgtext'

import Anchor from '@atoms/anchor'

import LinkedIn from '@atoms/svg/icons/linkedin'
import GitHub from '@atoms/svg/icons/github'
import Telegram from '@atoms/svg/icons/telegram'
import Instagram from '@atoms/svg/icons/instagram'
import BgTop from '@atoms/svg/icons/bg_contact_top'
import BgBottom from '@atoms/svg/icons/bg_contact_bottom'

import {
  StyledContainer,
  ContactContainer,
  ContactGrid,
  StyledTitle,
} from './styles'

const Contact: React.FC = () => {
  return (
    <StyledContainer>
      <BgTop />
      <ContactContainer>
        <StyledTitle>Contact Me!</StyledTitle>
        <ContactGrid>
          <Anchor href="https://www.linkedin.com/in/gabriel-morales-670338190/">
            <SvgText text="linkedIn">
              <LinkedIn />
            </SvgText>
          </Anchor>
          <Anchor href="https://github.com/gabbo-dam">
            <SvgText text="GitHub">
              <GitHub />
            </SvgText>
          </Anchor>
          <Anchor href="">
            <SvgText text="Telegram">
              <Telegram />
            </SvgText>
          </Anchor>
          <Anchor href="https://www.instagram.com/gabbo.mv/">
            <SvgText text="Instagram">
              <Instagram />
            </SvgText>
          </Anchor>
        </ContactGrid>
      </ContactContainer>
      <BgBottom />
    </StyledContainer>
  )
}

export default Contact
