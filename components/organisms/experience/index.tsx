import Title from '@atoms/title'
import Work from '@molecules/work'



import BgTop from '@atoms/svg/icons/bg_top_resume'
import BgBottom from '@atoms/svg/icons/bg_bottom_resume'


import { Background, StyledContainer, ExperienceContainer, WorkContainer, StyledWork, TopBar, Resume } from './styles'


const Experience: React.FC = () => {
  return(
    <Background>
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
        position='Frontend Developer'
        company='Smart Cookie Group'
        time='Freelance'
        date='Jan 17 - Current'
        description='Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et iaculis orci. '
        />
        
      </WorkContainer>
        </ExperienceContainer>
      <BgBottom />
    </Background>
  )
}

export default Experience