import { StyledTitle } from './styles'

const Title = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>
}

export default Title
