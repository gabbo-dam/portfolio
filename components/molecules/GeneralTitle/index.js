import { StyledGeneralTitle } from './styles'
import Text from '@atoms/Text'
import Button from '@atoms/Button'
import Title from '@atoms/Title'
import MainTitle from '@atoms/MainTitle'

const GeneralTitle = () => {
  return (
    <StyledGeneralTitle>
      <Title>Gabriel Morales</Title>

      <MainTitle fs='16px'>Front-end developer</MainTitle>

      <Button />
    </StyledGeneralTitle>
  )
}
export default GeneralTitle
