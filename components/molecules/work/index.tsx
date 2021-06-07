import Title from '@atoms/title'
import Text from '@atoms/text'
import Container from '@atoms/container'


import { StyledContainer, Description } from './styles'

import WorkProps from './types'

const Work: React.FC<WorkProps> = (props) => {
  return(
    <StyledContainer >
      <Container>

        <Title {...props}>{props.position}</Title>
        <Text>{props.company}</Text>
        <Text>{props.time}</Text>
        <Text>{props.date}</Text>
      </Container>
      <Container>

        <Description {...props}>{props.children}</Description>
      </Container>

    </StyledContainer>
  )
}

export default Work