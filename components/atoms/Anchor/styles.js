import styled from 'styled-components'
import {} from '@styles/Theme'

export const StyledAnchor = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  color: ${({ theme, color = 'gray' }) => theme[color]};
  font-size: ${({ fs = '17px' }) => fs};
  // font-family: ${({ font = 'Playfair Display' }) => font};
  font-weight: ${({ fw = '500' }) => fw};
  line-height: 1;
`
