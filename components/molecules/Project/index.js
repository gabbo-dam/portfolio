import { StyledImg } from './styles'
import Anchor from '@atoms/Anchor'
import Text from '@atoms/Text'

const Project = (props) => {
  return (
    <Anchor href={props.href}>
      <StyledImg
        src={props.src}
        alt={props.alt}
        w={props.w}
        h={props.h}
        br={props.br}
      />
      <Text align="center" {...props}>
        {props.children}
      </Text>
    </Anchor>
  )
}

export default Project
