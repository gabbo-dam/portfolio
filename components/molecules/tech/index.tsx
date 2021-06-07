import ImgText from '@molecules/imgtext'

import TechProps from './types'

const Tech: React.FC<TechProps> = (props) => {
  return(
    <>
      <ImgText
      src={props.src}
      alt={props.alt}
      >
        {props.children}
      </ImgText>
    </>
  )
}

export default Tech