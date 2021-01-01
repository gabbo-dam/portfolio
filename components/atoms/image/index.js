import Image from 'next/image'
import { StyledImg } from './styles'

const User = (props) => {
  return (
    <StyledImg
      src={props.src}
      alt={props.alt}
      w={props.w}
      h={props.h}
      br={props.br}
    />
  )
}

export default User
