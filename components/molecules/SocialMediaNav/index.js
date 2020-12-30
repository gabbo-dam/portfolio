import { StyledSocialMediaNav } from './styles'
import Twitter from '@icons/Twitter'
import Facebook from '@icons/Facebook'
import Instagram from '@icons/Instagram'
import LinkedIn from '@icons/LinkedIn'
import Anchor from '@atoms/Anchor'

const SocialMediaNav = () => {
  return (
    <StyledSocialMediaNav>
      <Anchor href='#'>
        <Facebook />
      </Anchor>
      <Anchor href='#'>
        <Twitter />
      </Anchor>
      <Anchor href='#'>
        <Instagram />
      </Anchor>
      <Anchor href='#'>
        <LinkedIn />
      </Anchor>
    </StyledSocialMediaNav>
  )
}
export default SocialMediaNav
