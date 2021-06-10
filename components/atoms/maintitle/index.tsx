import { StyledTitle } from './styles'
import TitleProps from './types'

const MainTitle: React.FC<TitleProps> = (props) => {
  return (
    <>
      <StyledTitle {...props}>{props.children}</StyledTitle>
    </>
  )
}

export default MainTitle
