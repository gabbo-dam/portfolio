import styled from 'styled-components'
import Container from '@atoms/container'
import NavBar from '@molecules/navbar'


export const StyledContainer = styled(Container)`
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: grid;

  @media (min-width: 768px){
    grid-template-columns: auto 80% auto;
  }
`
export const LogoContainer = styled(Container)`
  max-width: 125px;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  align-items: center;
`
export const HamburgerContainer = styled(Container)`
  grid-column: 3 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px){
    display: none;
  }
`
export const Mobile = styled(Container)`

  @media (min-width: 768px){
    display: none;
  }
`
export const MobileNavBar = styled(NavBar)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-row: 2;
  grid-column: 1 / 4;
  align-items: center;
  text-align: center;
  @media (min-width: 768px){
    display: none;
  }
`
