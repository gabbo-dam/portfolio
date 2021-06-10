import { StyledContainer } from './styles'

const Container: React.FC<any> = (props) => {
  return (
    <>
      <StyledContainer {...props}>{props.children}</StyledContainer>
    </>
  )
}

export default Container
