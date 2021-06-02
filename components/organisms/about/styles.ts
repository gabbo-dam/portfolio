import styled from 'styled-components'
import Text from '@atoms/text'
import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
`
export const InterestContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
export const AboutText = styled(Text)`
  line-height: 40px;
`
