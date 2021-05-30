import Img from '@atoms/img'
import Text from '@atoms/text'

import { StyledContainer } from './styles'

import ImgTextProps from './types'

const ImgText: React.FC<ImgTextProps> = (props) => {
  return(
    <StyledContainer>
      <Img 
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit="cover"
        />
      <Text>{props.children}</Text>
    </StyledContainer>
  )
}

export default ImgText