import Link from 'next/link'

import { StyledAnchor } from './styles'
import AnchorProps from './types'

const Anchor: React.FC<AnchorProps> = (props) => {
  return(
    <>
      <Link href={props.href}>
        <StyledAnchor {...props}>{props.children}</StyledAnchor>
      </Link>
    </>
  )
}

export default Anchor