import NavBar from '@molecules/navbar'
import Logo from '@atoms/svg/icons/logo'
import Container from '@atoms/container'

import { StyledContainer } from './styles'

const Menu: React.FC = () => {
  return(
    <StyledContainer>
        <Logo />
        <NavBar />
    </StyledContainer>
  )
}

export default Menu