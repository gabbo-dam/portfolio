import styled from 'styled-components'

export const StyledButton = styled.button`
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '12px 16px' }) => p};
  color: ${({ theme, color = 'black' }) => theme[color]};
  background-color: ${({ theme, bg = 'white' }) => theme[bg]};
  border: 0;
  outline: 0;
`
