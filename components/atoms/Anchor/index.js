import { StyledAnchor } from './styles'

const Anchor = (props) => {
  return <StyledAnchor {...props.children}>{props.children}</StyledAnchor>
}

export default Anchor
