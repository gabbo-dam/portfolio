import Title from '@atoms/title'
import Text from '@atoms/text'
import Container from '@atoms/container'


import { StyledContainer } from './styles'

import WorkProps from './types'

const Work: React.FC<WorkProps> = (props) => {
  return(
    <StyledContainer>
      <Container>

        <Title>{props.position}</Title>
        <Text>{props.company}</Text>
        <Text>{props.time}</Text>
        <Text>{props.date}</Text>
      </Container>
      <Container>

        <Text>{props.description}</Text>
      </Container>

    </StyledContainer>
  )
}

export default Work