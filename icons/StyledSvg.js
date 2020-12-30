import styled from 'styled-components'

export const StyledSvg = styled.svg`
  width: ${({ w = '18px' }) => w};
  height: auto;

  & path {
    fill: ${({ theme, color = 'white' }) => theme[color]};
  }
`
