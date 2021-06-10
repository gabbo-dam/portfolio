import { useState } from 'react'

import NavBar from '@molecules/navbar'
import Logo from '@atoms/svg/icons/logo'
import Text from '@atoms/text'
import Hamburger from 'hamburger-react'


import { StyledContainer, LogoContainer, HamburgerContainer, Mobile, MobileNavBar } from './styles'

const Menu: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <StyledContainer>
      <LogoContainer>
        <Logo />
        <Text>Gabriel Morales</Text>
      </LogoContainer>
      <NavBar display='none' />
      <HamburgerContainer>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamburgerContainer>
    </StyledContainer>
    <Mobile>
      {isOpen === true && <MobileNavBar />}
    </Mobile>

      </>
  )
}

export default Menu
