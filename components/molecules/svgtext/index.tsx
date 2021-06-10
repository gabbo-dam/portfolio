import { StyledContainer, StyledText } from './styles'

import SvgTextProps from './types'

const SvgText: React.FC<SvgTextProps> = (props) => {
  return (
      <StyledContainer>
        {props.children}
        <StyledText>{props.text}</StyledText>
      </StyledContainer>
  )
}

export default SvgText
