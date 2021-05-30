import styled from 'styled-components'

import Container from '@atoms/container'
import GridProps from './types'

export const StyledGrid = styled(Container)<GridProps>`
  grid-column: ${({ col = 'auto' }) => col};
  grid-row: ${({ row = 'auto' }) => row};
`