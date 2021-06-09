import SvgText from '@molecules/svgtext'

import Anchor from '@atoms/anchor'

import LinkedIn from '@atoms/svg/icons/linkedin'
import GitHub from '@atoms/svg/icons/github'
import Telegram from '@atoms/svg/icons/telegram'
import Instagram from '@atoms/svg/icons/instagram'
import BgTop from '@atoms/svg/icons/bg_contact_top'
import BgBottom from '@atoms/svg/icons/bg_contact_bottom'
import Download from '@atoms/svg/icons/download'

import {
  StyledContainer,
  ContactContainer,
  ContactGrid,
  StyledTitle,
  DownloadCV,
} from './styles'

const Contact: React.FC = () => {
  return (
    <StyledContainer id="contact">
      <BgTop />
      <ContactContainer>
        <StyledTitle>Contact Me!</StyledTitle>
        <ContactGrid>
          <Anchor
            href="https://www.linkedin.com/in/gabriel-morales-670338190/"
            target="_blank"
          >
            <SvgText text="linkedIn">
              <LinkedIn />
            </SvgText>
          </Anchor>
          <Anchor href="https://github.com/gabbo-dam" target="_blank">
            <SvgText text="GitHub">
              <GitHub />
            </SvgText>
          </Anchor>
          <Anchor href="https://t.me/damiand420" target="_blank">
            <SvgText text="Telegram">
              <Telegram />
            </SvgText>
          </Anchor>
          <Anchor href="https://www.instagram.com/gabbo.mv/" target="_blank">
            <SvgText text="Instagram">
              <Instagram />
            </SvgText>
          </Anchor>
          <DownloadCV
            href="/cv/Gabriel_Morales_CV.pdf"
            download
          >
            <Download />
            Download CV
          </DownloadCV>
        </ContactGrid>
      </ContactContainer>
      <BgBottom />
    </StyledContainer>
  )
}

export default Contact
