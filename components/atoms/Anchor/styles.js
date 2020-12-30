import styled from 'styled-components'
import {} from '@styles/Theme'

export const StyledAnchor = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  color: ${({ theme, color = 'auto' }) => theme[color]};
  font-size: ${({ fs = '17px' }) => fs}
  font-weight: ${({ fw = '500' }) => fw}
  line-height: 1;
`
