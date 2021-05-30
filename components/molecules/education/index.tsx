import Title from '@atoms/title'
import Text from '@atoms/text'
import Grid from '@atoms/grid'

import { StyledContainer } from './styles'

import EducationProps from './types'

const Education: React.FC<EducationProps> = (props) => {
  return(
    <StyledContainer>
        <Text>{props.date}</Text>
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
    </StyledContainer>
  )
}

export default Education