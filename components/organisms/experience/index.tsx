import Title from '@atoms/title'
import Work from '@molecules/work'



import BgTop from '@atoms/svg/icons/bg_top_resume'
import BgBottom from '@atoms/svg/icons/bg_bottom_resume'


import { StyledContainer } from './styles'


const Experience: React.FC = () => {
  return(
    <StyledContainer>
      <BgTop />
      <Title>Experience</Title>

      <Work 
      position='Frontend Developer'
      company='Smart Cookie Group'
      time='Freelance'
      date='Jan 17 - Current'
      description='WeLab is a consectetur adipisicing elit. Perferen abnostrum rerum ea velit, deserunt sunt dicta inventore neque, reiciendis ignissimos adipi delectus!'
      />

      

      
      <BgBottom />
    </StyledContainer>
  )
}

export default Experience