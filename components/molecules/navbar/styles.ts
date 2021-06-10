import styled from 'styled-components'

import Anchor from '@atoms/anchor'


export const StyledNav = styled.nav<any>`
  display: ${({display = 'grid'}) => display};
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-row: 2;
  grid-column: 1 / 4;
  align-items: center;
  text-align: center;
  @media (min-width: 768px){
    display: grid;
    grid-row: 1;
    grid-column: 2 / 3;
    grid-template-columns: repeat(6, 1fr);

  }
`
export const StyledAnchor = styled(Anchor)`
  padding: 10px 0;
`
