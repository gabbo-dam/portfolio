import { StyledButton } from './styles'
import Anchor from '@atoms/Anchor'

const Button = (props) => {
  return (
    <Anchor href={props.href}>
      <StyledButton {...props}>{props.children}</StyledButton>
    </Anchor>
  )
}

export default Button
