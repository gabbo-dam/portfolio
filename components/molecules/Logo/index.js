import { StyledLogo } from './styles'
import Anchor from '@atoms/Anchor'
import Image from '@atoms/image'

const Logo = () => {
  return (
    <StyledLogo>
      <Image
        src='./images/user.jpg'
        alt='User Image'
        w='45px'
        h='45px'
        br='50%'
      />
      <Anchor href='/' color='white' fs='17px' fw='500' font='IBM Plex Mono'>
        Gabriel Morales
      </Anchor>
    </StyledLogo>
  )
}
export default Logo
