import styled from "styled-components"

export const StyledSvg = styled.svg`
  width: ${({ w = "auto" }) => w};
  height: auto;

  & path {
    fill: ${({ theme, color = "auto" }) => theme[color]};
  }
`
