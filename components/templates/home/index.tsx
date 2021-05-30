import Hero from '@organisms/hero'
import Menu from '@organisms/menu'
import About from '@organisms/about'
import Resume from '@organisms/resume'
import Projects from '@organisms/projects'
import Contact from '@organisms/contact'
import Footer from '@organisms/footer'

import { Background, StyledContainer } from './styles'

const App: React.FC = () => {
  return(
    <>
      <Menu />
      <Hero />
      <Background>
        <StyledContainer>
          <About />
          <Resume />
          <Projects />
          <Contact />
        </StyledContainer>
      </Background>
      <Footer />
    </>
  )
}

export default App