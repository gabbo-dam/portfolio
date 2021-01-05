import styled from 'styled-components'

export const StyledLogo = styled.div`
  display: flex;
  width: ${({ w = '150px' }) => w};
  justify-content: space-between;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '20px 0px' }) => p};
  background-color: ${({ theme, bg = 'auto' }) => theme[bg]};
  text-align: center;
`
