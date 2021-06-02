import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column: 1 / 3;
  align-items: center;
`