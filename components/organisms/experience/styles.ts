import styled from 'styled-components'

import Container from '@atoms/container'
import Work from '@molecules/work'
import Title from '@atoms/title'

export const Background = styled.section<any>`
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
`
export const Resume = styled(Title)`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`

export const StyledTech = styled(Container)`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`
export const ExperienceContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
`
export const WorkContainer = styled(Container)`
  margin: 30px 0;
  padding: 0 0 30px 0;
  background: #ffffff;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 70px auto;
  // overflow:scroll;
  // overflow-x:hidden;
`
export const StyledWork = styled(Work)`
  padding: 30px 0 0 0;
`
export const TopBar = styled(Container)`
  grid-column: 1 / 3;

  border-bottom: 1px solid #bbbbbb;
`

export const StyledContainer = styled(Container)`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`
