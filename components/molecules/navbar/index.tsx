import Anchor from '@atoms/anchor'

import { StyledNav } from './styles'

const NavBar: React.FC = () => {
  return(
    <>
    <StyledNav>
      <Anchor href='#'>Home</Anchor>
      <Anchor href='#'>About</Anchor>
      <Anchor href='#'>Resume</Anchor>
      <Anchor href='#'>Portfolio</Anchor>
      <Anchor href='#'>Contact</Anchor>
    </StyledNav>
    </>
  )
}

export default NavBar