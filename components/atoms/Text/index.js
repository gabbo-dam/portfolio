import { StyledText } from './styles'

const Text = (props) => {
  return <StyledText {...props.children}>{props.children}</StyledText>
}

export default Text
