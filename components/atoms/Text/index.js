import { StyledText } from './styles'

const Text = (props) => {
  return (
    <StyledText color={props.color} {...props.children}>
      {props.children}
    </StyledText>
  )
}

export default Text
