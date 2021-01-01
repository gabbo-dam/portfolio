import { StyledHeader } from './styles'

import Logo from '@molecules/Logo'
import SocialMediaNav from '@molecules/SocialMediaNav'

const Header = (props) => {
  return (
    <StyledHeader>
      <Logo />
      <SocialMediaNav />
    </StyledHeader>
  )
}

export default Header
