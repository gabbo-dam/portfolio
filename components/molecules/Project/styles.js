import styled from 'styled-components'

export const StyledImg = styled.img`
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  width: ${({ w = '100%' }) => w};
  height: ${({ h = 'auto' }) => h};
  border-radius: ${({ br = '0' }) => br};
`
