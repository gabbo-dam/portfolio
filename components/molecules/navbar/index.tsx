import { StyledNav, StyledAnchor } from './styles'

const NavBar: React.FC<any> = (props) => {
  return (
    <>
      <StyledNav {...props}>
        <StyledAnchor href="#">Home</StyledAnchor>
        <StyledAnchor href="#about">About</StyledAnchor>
        <StyledAnchor href="#resume">Resume</StyledAnchor>
        <StyledAnchor href="#education">Education</StyledAnchor>
        <StyledAnchor href="#portfolio">Portfolio</StyledAnchor>
        <StyledAnchor href="#contact">Contact</StyledAnchor>
      </StyledNav>
    </>
  )
}

export default NavBar
