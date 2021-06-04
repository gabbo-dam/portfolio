import Title from '@atoms/title'
import Text from '@atoms/text'
import Grid from '@atoms/grid'

import { StyledContainer } from './styles'

import CourseProps from './types'

const Course: React.FC<CourseProps> = (props) => {
  return(
    <StyledContainer>
        <Text>{props.date}</Text>
        <Title>{props.education}</Title>
        <Text>{props.description}</Text>
    </StyledContainer>
  )
}

export default Course