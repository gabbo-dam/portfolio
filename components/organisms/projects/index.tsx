import Card from '@molecules/card'

import { StyledContainer, CardsContainer, StyledTitle } from './styles'


const Projects: React.FC = () => {
  return(
    <StyledContainer>
      <StyledTitle>My Projects</StyledTitle>
      <CardsContainer>
        <Card
        src='/img/hero.jpg'
        alt='Portafolio Image'
        site='/'
        repo='https://github.com/gabbo-dam/portfolio'
        title='Gabriel'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/jetswap.png'
        alt='Jetswap Image'
        site='https://jetswap2.netlify.app/'
        repo='https://github.com/gabbo-dam/jetswap-frontend2'
        title='Jetswap'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/fortress.png'
        alt='Fortress Image'
        site='https://quirky-meitner-24251a.netlify.app/'
        repo='https://github.com/gabbo-dam/fortress-landing'
        title='Fortress'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/polaris.png'
        alt='Polaris Image'
        site='https://galaxy777.netlify.app/'
        repo='https://github.com/gabbo-dam/galaxy-frontend-farms'
        title='Polaris'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/wsb.png'
        alt='WallStreetBets Image'
        site='https://wbs-token.netlify.app'
        repo='https://github.com/gabbo-dam/farming-wsb'
        title='WSB'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/unilayer.png'
        alt='Unilayer Image'
        site='https://relaxed-johnson-0234d3.netlify.app/farm/LAYERXETHPool'
        repo='https://github.com/gabbo-dam/YieldFarming'
        title='Unilayer'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/voodoo.png'
        alt='Voodoo Dollar '
        site='https://voodoo-dollar.netlify.app'
        repo='https://github.com/gabbo-dam/VoodooDollar'
        title='Voodoo'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
        <Card
        src='/img/simon_dice.png'
        alt='Simon Said Image'
        site='https://angry-swanson-ff3e45.netlify.app/'
        repo='#'
        title='Simon Said'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, error accusantium beatae esse voluptates nostrum architecto'
        />        
      </CardsContainer>
    </StyledContainer>
  )
}

export default Projects