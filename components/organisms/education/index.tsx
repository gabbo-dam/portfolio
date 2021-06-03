import Title from '@atoms/title'

import Container from '@atoms/container'
import Course from '@molecules/course'
import ProgrammingPana from '@atoms/svg/icons/programming-pana'
import Tree from '@atoms/svg/icons/tree'

import { StyledContainer, GridHistory, Right, Center, Left, EducationText } from './styles'


const Education: React.FC = () => {
  return(
    <StyledContainer>
      <Container>
        <Title>Education</Title>
        <EducationText>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et iaculis orci. Mauris iaculis erat eu sem congue, et consectetur ipsum tincidunt. Donec vulputate leo eu nibh tristique varius. Aenean consequat leo enim, sed efficitur massa malesuada sed. , et consectetur ipsum tincidunt. Donec vulputate leo eu nibh tristique varius. Aenean consequat leo enim, sed efficitur massa malesuada sed. </EducationText>
      </Container>
      <ProgrammingPana />

      <GridHistory>
        <Right>
          <Course
          title='React'
          date='2020'
          description='Curso de React' />
        </Right>
        <Center>
          <Tree />
        </Center>
        <Left>
          <Course
          title='React'
          date='2020'
          description='Curso de React' />
        </Left>
      </GridHistory>


      {/* <Course
      title='React'
      date='2020'
      description='Curso de React' /> */}
    </StyledContainer>
  )
}

export default Education