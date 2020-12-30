import Link from 'next/link'
import { StyledAnchor } from './styles'

const Anchor = (props) => {
  return (
    <Link href={props.href}>
      <StyledAnchor {...props.children}>{props.children}</StyledAnchor>
    </Link>
  )
}

export default Anchor
