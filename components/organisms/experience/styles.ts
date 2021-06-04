import styled from 'styled-components'

import Container from '@atoms/container'
import Work from '@molecules/work'
import Title from '@atoms/title'



export const Background = styled(Container)`
  background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
`
export const Resume = styled(Title)`
  display: none;
  @media (min-width: 768px){
    display: inline-block;
  }
`

export const StyledTech = styled(Container)`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);


  @media (min-width: 768px){
    grid-template-columns: repeat(7, 1fr);
  }
`
export const ExperienceContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
`
export const WorkContainer = styled(Container)`
  margin: 30px 0;
  height: 350px;
  background: #ffffff;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 70px auto;
  // overflow:scroll;
  // overflow-x:hidden;
`
export const StyledWork = styled(Work)`

`
export const TopBar = styled(Container)`
  grid-column: 1 / 3;

  border-bottom: 1px solid #BBBBBB;

`

export const StyledContainer = styled(Container)`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

`