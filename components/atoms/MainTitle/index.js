import { StyledMainTitle } from './styles'

const MainTitle = (props) => {
  return <StyledMainTitle {...props}>{props.children}</StyledMainTitle>
}

export default MainTitle
