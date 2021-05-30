import Text from '@atoms/text'

import { StyledContainer } from './styles'

import SvgTextProps from './types'

const SvgText: React.FC<SvgTextProps> = (props) => {
  return(
    <StyledContainer>
      {props.children}
      <Text>{props.text}</Text>
    </StyledContainer>
  )
}

export default SvgText