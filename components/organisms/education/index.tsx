import Title from '@atoms/title'

import Container from '@atoms/container'
import Course from '@molecules/course'
import ProgrammingPana from '@atoms/svg/icons/programming-pana'
import Tree from '@atoms/svg/icons/tree'

import {
  StyledContainer,
  GridHistory,
  Right,
  Center,
  Left,
  EducationText,
  Right2,
  Left2,
  Right3,
} from './styles'

const Education: React.FC = () => {
  return (
    <StyledContainer>
      <Container>
        <Title>Education</Title>
        <EducationText>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Integer et iaculis orci. Mauris iaculis erat
          eu sem congue, et consectetur ipsum tincidunt. Donec vulputate leo eu
          nibh tristique varius. Aenean consequat leo enim, sed efficitur massa
          malesuada sed. , et consectetur ipsum tincidunt. Donec vulputate leo
          eu nibh tristique varius. Aenean consequat leo enim, sed efficitur
          massa malesuada sed.{' '}
        </EducationText>
      </Container>
      <ProgrammingPana />

      <GridHistory>
        <Right>
          <Course
            education="High school"
            date="2017"
            description="High school Degree in science"
          />
        </Right>

        <Center>
          <Tree />
        </Center>
        <Left>
          <Course
            education="Udemy"
            date="2020"
            description="Web development with HTML5, CSS, JS, AJAX, PHP, and MySQL."
          />
        </Left>
        <Right2>
          <Course
            education="Platzi"
            date="2020"
            description="Frontend Developer Course"
          />
          <Course description="Basic JavaScript Course " />
          <Course description="JavaScript Basics 2018" />

        </Right2>
        <Left2>
          <Course
            education="Platzi"
            date="2020"
            description="ECMAScript 6+ Course"
          />
          <Course description="Closures and Scope Course in JavaScript" />
          <Course description="Asynchronism Course with JavaScript" />
        </Left2>
        <Right3>
          <Course education="Platzi" date="2021" description="React Course" />
          <Course description="Git and GitHub Professional Course" />
          <Course description="NPM Course" />
        </Right3>
      </GridHistory>

      {/* <Course
      title='React'
      date='2020'
      description='Curso de React' /> */}
    </StyledContainer>
  )
}

export default Education
