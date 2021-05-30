import Hero from '@organisms/hero'
import Menu from '@organisms/menu'
import About from '@organisms/about'
import Resume from '@organisms/resume'
import Projects from '@organisms/projects'
import Contact from '@organisms/contact'
import Footer from '@organisms/footer'

import { StyledContainer } from './styles'

const App: React.FC = () => {
  return(
    <>
      <Hero />
      <Menu />
      <StyledContainer>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </StyledContainer>
      <Footer />
    </>
  )
}

export default App