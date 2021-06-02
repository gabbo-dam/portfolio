import styled from 'styled-components'
import Container from '@atoms/container'

export const StyledContainer = styled(Container)`
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: grid;

  @media (min-width: 768px){
    grid-template-columns: auto 80%;
  }
`
export const LogoContainer = styled(Container)`
  max-width: 125px;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  align-items: center;
`
