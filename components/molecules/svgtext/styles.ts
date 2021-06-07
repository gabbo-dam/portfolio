import styled from 'styled-components'


import Text from '@atoms/text'
import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  padding: 20px;
  min-width: 100px;
  border-radius: 15px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`
export const BorderWrap = styled(Container)`
  min-width: 100px;
  border-radius: 16px;
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  padding: 1px;
`
export const StyledText = styled(Text)`
  margin-top: 15px;
`
