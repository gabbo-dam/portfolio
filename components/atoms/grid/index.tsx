import { StyledGrid } from './styles'
import GridProps from './types'

const Grid: React.FC<GridProps> = ( props ) => {
  return(
    <>
      <StyledGrid {...props}>{props.children}</StyledGrid>
    </>
  )
}

export default Grid