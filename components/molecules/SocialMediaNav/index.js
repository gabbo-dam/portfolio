import { StyledSocialMediaNav } from './styles'
import Twitter from '@icons/Twitter'
import Facebook from '@icons/Facebook'
import Instagram from '@icons/Instagram'
import LinkedIn from '@icons/LinkedIn'
import GitHub from '@icons/GitHub'
import Anchor from '@atoms/Anchor'

const SocialMediaNav = () => {
  return (
    <StyledSocialMediaNav>
      <Anchor href="https://www.facebook.com/gabbo.dam.5">
        <Facebook />
      </Anchor>
      <Anchor href="https://twitter.com/gabbomorales1">
        <Twitter />
      </Anchor>
      <Anchor href="https://www.instagram.com/gabbo.mv/">
        <Instagram />
      </Anchor>
      <Anchor href="https://www.linkedin.com/in/gabriel-morales-670338190/?locale=en_US">
        <LinkedIn />
      </Anchor>
      <Anchor href="https://github.com/gabbo-dam">
        <GitHub />
      </Anchor>
    </StyledSocialMediaNav>
  )
}
export default SocialMediaNav
