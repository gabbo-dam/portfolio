import Hero from '@organisms/hero'
import Menu from '@organisms/menu'
import About from '@organisms/about'
import Experience from '@organisms/experience'
import Education from '@organisms/education'
import Tech from '@organisms/tech'
import Projects from '@organisms/projects'
import Contact from '@organisms/contact'
import Footer from '@organisms/footer'

const App: React.FC = () => {
  return(
    <>
      <Menu />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App