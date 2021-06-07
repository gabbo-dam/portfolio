import NavBar from '@molecules/navbar'
import Logo from '@atoms/svg/icons/logo'
import Text from '@atoms/text'

import { StyledContainer, LogoContainer } from './styles'

const Menu: React.FC = () => {
  return(
    <StyledContainer>
      <LogoContainer>

        <Logo />
        <Text>Gabriel Morales</Text>
      </LogoContainer>
        <NavBar />
    </StyledContainer>
  )
}

export default Menu