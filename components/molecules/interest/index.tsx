import { StyledInterest } from './styles'
import ImgText from '@molecules/imgtext'

import InterestProps from './types'

const Interest: React.FC<InterestProps> = (props) => {
  return(
    <StyledInterest>
      <ImgText
      src={props.src}
      alt={props.alt}
      >
        {props.children}
      </ImgText>
    </StyledInterest>
  )
}

export default Interest