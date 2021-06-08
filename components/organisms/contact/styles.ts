import styled from 'styled-components'

import Container from '@atoms/container'
import Title from '@atoms/title'
import Anchor from '@atoms/anchor'

export const StyledContainer = styled.section<any>`
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
`
export const DownloadCV = styled.a`
display: block;
cursor: pointer;
text-decoration: none;
font-size: 14px;
font-weight: bold;
color: #333333;
width: 50%;
padding: 20px 0;
border-radius: 15px;
margin: 0 auto;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
grid-column: 1 / 3;


@media (min-width: 768px) {
  grid-column: 2 / 4;

  }
`
export const ContactContainer = styled(Container)`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
  }
`
export const StyledTitle = styled(Title)`
  background-image: none;
  background-color: #ffffff;
  text-align: center;
  margin: 25px 0;
  @media (min-width: 768px) {
    margin: 50px 0;
  }
`
export const ContactGrid = styled(Container)`
  display: grid;
  gap: 20px;
  margin: 0 0 25px 0;

  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 0 50px 0;
  }
`
