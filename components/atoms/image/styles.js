import styled from 'styled-components'

export const StyledImg = styled.div`
  display: inline-block;
  margin: ${({ m = '0' }) => m};
  padding: ${({ p = '0' }) => p};
  width: ${({ w = '500px' }) => w};
  height: ${({ h = '500px' }) => h};

  border-radius: ${({ br = '50%' }) => br};
`
