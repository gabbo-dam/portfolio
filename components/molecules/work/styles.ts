import styled from 'styled-components'

import Container from '@atoms/container'
import Text from '@atoms/text'

export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column: 1 / 3;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Description = styled(Text)`
  line-height: 30px;
  @media (min-width: 768px) {
  }
`
