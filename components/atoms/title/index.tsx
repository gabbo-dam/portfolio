import { StyledTitle } from './styles'

const Title: React.FC = (props) => {
  return(
    <>
      <StyledTitle {...props}>{props.children}</StyledTitle>
    </>
  )
}

export default Title