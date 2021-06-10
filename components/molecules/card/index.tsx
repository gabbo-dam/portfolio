import Anchor from '@atoms/anchor'
import Title from '@atoms/title'

import CardProps from './types'

import {
  StyledCard,
  CardContent,
  StyledImg,
  CardFooter,
  StyledAnchor,
  StyledText,
  ButtonContainer,
  Date,
} from './styles'

const Card: React.FC<CardProps> = (props) => {
  return (
    <StyledCard>
      <Anchor href={props.site} target="_blank">
        <StyledImg
          src={props.src}
          alt={props.alt}
          layout="responsive"
          width={1920}
          height={1080}
        />
      </Anchor>

      <CardContent>
        <Title>{props.title}</Title>
        <StyledText>{props.text}</StyledText>
        <ButtonContainer>
          <StyledAnchor href={props.site} target="_blank">
            Go to Site
          </StyledAnchor>
          <StyledAnchor href={props.repo} target="_blank">
            Go to Repo
          </StyledAnchor>
        </ButtonContainer>
      </CardContent>
      <CardFooter>
        <Date>Date {props.date}</Date>
      </CardFooter>
    </StyledCard>
  )
}

export default Card
