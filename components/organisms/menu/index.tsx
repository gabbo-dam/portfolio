import NavBar from '@molecules/navbar'
import Logo from '@atoms/svg/icons/logo'
import Container from '@atoms/container'

import { MenuContainer, StyledContainer } from './styles'

const Menu: React.FC = () => {
  return(
    <>
      <MenuContainer>
        <NavBar />
      </MenuContainer>
    </>
  )
}

export default Menu