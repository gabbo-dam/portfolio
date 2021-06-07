import styled from 'styled-components'
import TextProps from './types'

export const StyledText = styled.p<TextProps>`
  color: ${({ color = ''}) => color};
  font-size: ${({ size = ''}) => size};
  
`
