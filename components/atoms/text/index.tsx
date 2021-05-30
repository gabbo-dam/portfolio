import { StyledText } from './styles'

const Text: React.FC = (props) => {
  return(
    <>
      <StyledText {...props}>{props.children}</StyledText>
    </>
  )
}

export default Text