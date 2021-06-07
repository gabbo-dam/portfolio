import { StyledText } from './styles'
import TextProps from './types'

const Text: React.FC<TextProps> = (props) => {
  return(
    <>
      <StyledText {...props}>{props.children}</StyledText>
    </>
  )
}

export default Text