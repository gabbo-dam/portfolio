import { StyledMenu } from './styles'
import { StyledLine } from './styles'

const Menu = (props) => {
  return (
    <StyledMenu>
      <StyledLine w='50%' />
      <StyledLine />
      <StyledLine w='50%' align_self='flex-end' />
    </StyledMenu>
  )
}

export default Menu
