import styled from 'styled-components'


import Text from '@atoms/text'
import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  padding: 20px;
  min-width: 100px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledText = styled(Text)`
  margin-top: 15px;
`