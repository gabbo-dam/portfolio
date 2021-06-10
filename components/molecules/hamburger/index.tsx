import { Open, Span, SubMenu, Item, Link } from './styles'

const Hamburger: React.FC = () => {
  return (
    <>
      <Open>
        <Span className="cls"></Span>
        <Span>
          <SubMenu>
            <Item>
              <Link href="#about" title="about">
                Sobre / About
              </Link>
            </Item>
            <Item>
              <Link href="#skills" title="skills">
                Habilidades / Skills
              </Link>
            </Item>
            <Item>
              <Link href="#jobs" title="jobs">
                Trabalhos / Jobs
              </Link>
            </Item>
            <Item>
              <Link href="#contact" title="contact">
                Contato / Contact
              </Link>
            </Item>
          </SubMenu>
        </Span>
        <Span className="cls"></Span>
      </Open>
    </>
  )
}

export default Hamburger
