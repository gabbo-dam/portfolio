import Link from 'next/link'
import { StyledAnchor } from './styles'

const Anchor = (props) => {
  return (
    <Link href={props.href}>
      <StyledAnchor
        color={props.color}
        fs={props.fs}
        m={props.m}
        p={props.p}
        fw={props.fw}
        font={props.font}
        href={props.href}
      >
        {props.children}
      </StyledAnchor>
    </Link>
  )
}

export default Anchor
