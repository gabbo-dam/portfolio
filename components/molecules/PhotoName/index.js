import { StyledPhotoName } from './styles'
import Text from '@atoms/Text'
import Image from '@atoms/image'

const PhotoName = () => {
  return (
    <StyledPhotoName>
      <Image />
      <Text color='white'>Gabriel Morales</Text>
    </StyledPhotoName>
  )
}
export default PhotoName
