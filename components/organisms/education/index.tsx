
import Container from '@atoms/container'
import Course from '@molecules/course'
import ProgrammingPana from '@atoms/svg/icons/programming-pana'
import Tree from '@atoms/svg/icons/tree'
import TreeMobile from '@atoms/svg/icons/tree-mobile'

import {
  StyledContainer,
  GridHistory,
  Right,
  Center,
  Left,
  StyledTitle,
  Right2,
  Left2,
  Right3,
} from './styles'

const Education: React.FC = () => {
  return (
    <StyledContainer id='education'>
        <StyledTitle>Education</StyledTitle>
      <GridHistory>
      <Right>
          <Course education="Platzi" date="2021" description="React Course" />
          <Course description="Git and GitHub Professional Course" />
          <Course description="NPM Course" />
        </Right>
        <Center>
          <TreeMobile />
        </Center>
        <Left>
          <Course
            education="Platzi"
            date="2020"
            description="ECMAScript 6+ Course"
          />
          <Course description="Closures and Scope Course in JavaScript" />
          <Course description="Asynchronism Course with JavaScript" />
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
            education="Udemy"
            date="2020"
            description="Web development with HTML5, CSS, JS, AJAX, PHP, and MySQL."
          />
        </Left2>
    
       
        <Right3>
          <Course
            education="High school"
            date="2017"
            description="High school Degree in science"
          />
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
