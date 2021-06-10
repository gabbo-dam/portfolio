import Title from '@atoms/title'
import Work from '@molecules/work'

import BgTop from '@atoms/svg/icons/bg_top_resume'
import BgBottom from '@atoms/svg/icons/bg_bottom_resume'

import {
  Background,
  StyledContainer,
  ExperienceContainer,
  WorkContainer,
  StyledWork,
  TopBar,
  Resume,
} from './styles'

const Experience: React.FC = () => {
  return (
    <Background id="resume">
      <BgTop />
      <ExperienceContainer>
        <WorkContainer>
          <TopBar>
            <StyledContainer>
              <Title>Experience</Title>
              <Resume>Resume</Resume>
            </StyledContainer>
          </TopBar>

          <StyledWork
            position="Frontend Developer"
            company="Freelancer"
            date="Jan 17 - Current"
          >
            - Programmed Fortress landing page. <br />
            - Administered Jetswap Frontend Development. <br />
            - Build and deploy a UI-Kit package implemented on Jetswap project.{' '}
            <br />
            - Resolved Git conflicts and problems. <br />
            - Assisted and Helped with the Jetswap UI-Kit deployment. <br />
            - Redesigned Polaris Interface. <br />
            - Created landing page for WSB Token project. <br />- Developed
            Voodoo Dollar Interface.
          </StyledWork>
        </WorkContainer>
      </ExperienceContainer>
      <BgBottom />
    </Background>
  )
}

export default Experience
