import styled from 'styled-components'

export const StyledMainTitle = styled.h1`
  font-size: ${({ fs = '90px' }) => fs};
  font-family: 'Playfair Display', serif;
  color: ${({ theme, color = 'white' }) => theme[color]};
  font-weight: ${({ fw = '500' }) => fw};
  line-height: 1.2;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
`
