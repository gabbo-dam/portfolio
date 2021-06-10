import styled from 'styled-components'
import Text from '@atoms/text'
import Title from '@atoms/title'
import Container from '@atoms/container'

export const StyledContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const InterestContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const AboutText = styled(Text)`
  line-height: 40px;
  @media (min-width: 768px) {
  }
`
export const AboutTitle = styled(Title)`
  margin-bottom: 25px;
  &:after{
    content: '';
    display:block;
    width:15%;
    height:7px;
    margin-top: 15px;
    background: #FD749B;
    
    border-radius: 50px;
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
    &:after{
      content: '';
      display:block;
      width:10%;
      height:7px;
      margin-top: 15px;
      background: #FD749B;
      
      border-radius: 50px;
  }
`
export const StyledGrid = styled(Container)`
  display: grid;
`
