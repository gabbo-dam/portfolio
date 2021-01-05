import { StyledImg } from './styles'
import Anchor from '@atoms/Anchor'
import Text from '@atoms/Text'
import Button from '@atoms/Button'

const Project = (props) => {
  return (
    <div>
      <Anchor href={props.href}>
        <StyledImg
          src={props.src}
          alt={props.alt}
          w={props.w}
          h={props.h}
          br={props.br}
        />
      </Anchor>
      <Button m="10px 0 0 0" href={props.href}>
        <Text align="center" {...props}>
          {props.children}
        </Text>
      </Button>
    </div>
  )
}

export default Project
