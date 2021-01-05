import { StyledText } from './styles'

const Text = (props) => {
  return (
    <StyledText color={props.color} align={props.align} {...props.children}>
      {props.children}
    </StyledText>
  )
}

export default Text
