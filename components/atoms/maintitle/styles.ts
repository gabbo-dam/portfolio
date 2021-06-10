import styled from 'styled-components'
import TitleProps from './types'

export const StyledTitle = styled.h1<TitleProps>`
  color: ${({ color = '' }) => color};
  font-size: ${({ size = '' }) => size}
}
`
