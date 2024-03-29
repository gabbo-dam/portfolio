import Card from '@molecules/card'

import { StyledContainer, CardsContainer, StyledTitle } from './styles'

const Projects: React.FC = () => {
  return (
    <StyledContainer id="portfolio">
      <StyledTitle>My Projects</StyledTitle>
      <CardsContainer>
        <Card
          src="/img/portfolio.png"
          alt="Portafolio Image"
          site="/"
          repo="https://github.com/gabbo-dam/portfolio"
          title="Portfolio"
          text={`Created Gabriel's portfolio using Next.js and Styled Components`}
          date=" 06, 2021"
        />
        <Card
          src="/img/jetswap.png"
          alt="Jetswap Image"
          site="https://jetswap.finance/"
          repo="https://github.com/gabbo-dam/jetswap-frontend2"
          title="Jetswap"
          text="Developed Jetswap by building a UI-Kit package for diverse interfaces and applications and assisted with the deployment"
          date=" 05, 2021"
        />
        <Card
          src="/img/fortress.png"
          alt="Fortress Image"
          site="https://quirky-meitner-24251a.netlify.app/"
          repo="https://github.com/gabbo-dam/fortress-landing"
          title="Fortress"
          text="Programmed Fortress landing pages implementing the new responsive, mobile-first approach and best practices."
          date=" 05, 2021"
        />
        <Card
          src="/img/polaris.png"
          alt="Polaris Image"
          site="https://galaxy777.netlify.app/"
          repo="https://github.com/gabbo-dam/galaxy-frontend-farms"
          title="Polaris"
          text="Redesigned Polaris Interface and Assessed UX and UI designs for technical feasibility."
          date=" 04, 2021"
        />
        <Card
          src="/img/wsb.png"
          alt="WallStreetBets Image"
          site="https://wbs-token.netlify.app"
          repo="https://github.com/gabbo-dam/farming-wsb"
          title="WSB"
          text="Programmed WSB landing pages implementing the new responsive, mobile-first approach and best practices."
          date=" 03, 2021"
        />
        <Card
          src="/img/unilayer.png"
          alt="Unilayer Image"
          site="https://relaxed-johnson-0234d3.netlify.app/farm/LAYERXETHPool"
          repo="https://github.com/gabbo-dam/YieldFarming"
          title="Unilayer"
          text="Redesigned Unilayer Interface and Assessed UX and UI designs for technical feasibility."
          date=" 02, 2021"
        />
        <Card
          src="/img/voodoo.png"
          alt="Voodoo Dollar "
          site="https://voodoo-dollar.netlify.app"
          repo="https://github.com/gabbo-dam/VoodooDollar"
          title="Voodoo"
          text="Redesigned Voodoo Dollar Interface and Assessed UX and UI designs for technical feasibility."
          date=" 02, 2021"
        />
        <Card
          src="/img/simon_dice.png"
          alt="Simon Said Image"
          site="https://angry-swanson-ff3e45.netlify.app/"
          repo="#"
          title="Simon Said"
          text="Programmed Simon Said game on vanilla JavaScript"
          date=" 11, 2020"
        />
      </CardsContainer>
    </StyledContainer>
  )
}

export default Projects
