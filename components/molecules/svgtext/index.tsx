
import { StyledContainer, StyledText, BorderWrap } from './styles'

import SvgTextProps from './types'

const SvgText: React.FC<SvgTextProps> = (props) => {
  return(
    <BorderWrap>
      
      <StyledContainer>
        {props.children}
        <StyledText>{props.text}</StyledText>
      </StyledContainer>
    </BorderWrap>
  )
}

export default SvgText