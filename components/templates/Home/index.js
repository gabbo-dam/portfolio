import { StyledHomePageMainContent, Container } from './styles'

import Text from '@atoms/Text'
import Project from '@molecules/Project'
import Header from '@organisms/Header'
import StandardTextHolder from '@molecules/StandardTextHolder'
import Anchor from '@atoms/Anchor'

const Home = () => {
  return (
    <StyledHomePageMainContent>
      <Header />

      <Container>
        <Project
          href="https://damgamingclub.com/"
          src="/images/damgamingclub.PNG"
        >
          Dam Gaming Club
        </Project>
        <Project
          href="https://mystifying-jackson-735ff0.netlify.app"
          src="/images/Opera Snapshot_2021-01-05_101129_mystifying-jackson-735ff0.netlify.app.png"
        >
          Coffe Blog
        </Project>
        <Project
          href="https://lucid-hopper-d05210.netlify.app"
          src="/images/Opera Snapshot_2021-01-05_080827_lucid-hopper-d05210.netlify.app.png"
        >
          Real State Website
        </Project>
        <Project
          href="https://angry-swanson-ff3e45.netlify.app"
          src="/images/Opera Snapshot_2020-12-17_125627_angry-swanson-ff3e45.netlify.app.png"
        >
          Simon Says
        </Project>
        <Project
          href="https://platzi-badges-wheat.vercel.app"
          src="/images/Home.png"
        >
          Platzi Badges
        </Project>
        <Project
          href="https://eloquent-johnson-0bb2b2.netlify.app"
          src="/images/Opera Snapshot_2021-01-05_101026_eloquent-johnson-0bb2b2.netlify.app.png"
        >
          Traveling Blog
        </Project>
      </Container>
    </StyledHomePageMainContent>
  )
}

export default Home
