import Title from '@atoms/title'
import Text from '@atoms/text'
import Grid from '@atoms/grid'

import { StyledContainer } from './styles'

import WorkProps from './types'

const Work: React.FC<WorkProps> = (props) => {
  return(
    <StyledContainer>
      <Grid>
        <Title>{props.position}</Title>
        <Text>{props.company}</Text>
        <Text>{props.time}</Text>
        <Text>{props.date}</Text>
      </Grid>
      <Grid>
        <Title>Resume</Title>
        <Text>{props.description}</Text>
      </Grid>

    </StyledContainer>
  )
}

export default Work