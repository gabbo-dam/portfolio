import styled from 'styled-components'

import Text from '@atoms/text'
import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  padding: 20px;
  min-width: 100px;
  border: 1px solid #281ac8;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  transition: transform 250ms;
  &:hover {
    transform: translateY(-10px);
  }
 
`

export const StyledText = styled(Text)`
  margin-top: 15px;
`
