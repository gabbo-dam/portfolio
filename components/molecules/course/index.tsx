import Title from '@atoms/title'
import Text from '@atoms/text'
import Grid from '@atoms/grid'

import { StyledContainer, Description } from './styles'

import CourseProps from './types'

const Course: React.FC<CourseProps> = (props) => {
  return (
    <StyledContainer>
      <Text>{props.date}</Text>
      <Title>{props.education}</Title>
      <Description>- {props.description}</Description>
    </StyledContainer>
  )
}

export default Course
