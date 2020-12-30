import styled from 'styled-components'

export const StyledTitle = styled.h2`
  font-size: ${({ fs = '2rem' }) => fs};
  font-family: 'Playfair Display', serif;
  color: ${({ theme, color = 'auto' }) => theme[color]};
  font-weight: ${({ fw = '700' }) => fw};
  line-height: 1;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
`
