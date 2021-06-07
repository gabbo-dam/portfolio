
import Anchor from '@atoms/anchor'
import Title from '@atoms/title'

import CardProps from './types'

import { StyledCard, CardContent, StyledImg, CardFooter, StyledAnchor, StyledText, ButtonContainer } from './styles'


const Card: React.FC<CardProps> = (props) => {
  return(
    <StyledCard>
      <Anchor href={props.site}>
          <StyledImg 
          src={props.src}
          alt={props.alt}
          layout="responsive"
          width={1920}
          height={1080}
          />
      </Anchor>
        
        <CardContent>
          <Title>
            {props.title}
          </Title>
          <StyledText>
            {props.text}
          </StyledText>
          <ButtonContainer>
            <StyledAnchor href={props.site}>
              Go to Site
            </StyledAnchor>
            <StyledAnchor href={props.repo}>
              Go to Repo
            </StyledAnchor>
          </ButtonContainer>
        </CardContent>
        <CardFooter>
          <StyledText>Date xx, 20xx</StyledText>
        </CardFooter>
    </StyledCard>
  )
}

export default Card