import styled from 'styled-components'

export const StyledText = styled.p`
  font-size: ${({ fs = '16px' }) => fs};
  color: ${({ theme, color = 'auto' }) => theme[color]};
  font-weight: ${({ fw = '400' }) => fw};
  line-height: 1.5;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
`
