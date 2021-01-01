import { StyledStandardTextHolder } from './styles'
import Text from '@atoms/Text'
import Title from '@atoms/Title'

const StandardTextHolder = () => {
  return (
    <StyledStandardTextHolder>
      <Title color='green'>Let's work together</Title>

      <Text>
        I’m available at <br />
        gabbomorales1@gmail.com <br />
        (+1) 346 529 1454
      </Text>
    </StyledStandardTextHolder>
  )
}

export default StandardTextHolder
