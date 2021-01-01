import { StyledHomePageMainContent } from './styles'
import Menu from '@atoms/Menu'
import GeneralTitle from '@molecules/GeneralTitle'
import StandardTextHolder from '@molecules/StandardTextHolder'

const HomePageMainContent = () => {
  return (
    <StyledHomePageMainContent>
      <Menu />
      <GeneralTitle />
      <StandardTextHolder />
    </StyledHomePageMainContent>
  )
}

export default HomePageMainContent
