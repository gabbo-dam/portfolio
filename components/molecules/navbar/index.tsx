import Anchor from '@atoms/anchor'

import { StyledNav } from './styles'

const NavBar: React.FC = () => {
  return(
    <>
    <StyledNav>
      <Anchor href='#'>Home</Anchor>
      <Anchor href='#about'>About</Anchor>
      <Anchor href='#resume'>Resume</Anchor>
      <Anchor href='#education'>Education</Anchor>
      <Anchor href='#portfolio'>Portfolio</Anchor>
      <Anchor href='#contact'>Contact</Anchor>
    </StyledNav>
    </>
  )
}

export default NavBar