import styled from 'styled-components'

import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
`
export const Background = styled(Container)`
  background-image: url(/img/bg.svg);
  background-attachment: fixed;
  background-size: cover;
`