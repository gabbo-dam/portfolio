import styled from 'styled-components'

export const StyledNav = styled.nav`
display: none;
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    text-align: center;
  }
`
