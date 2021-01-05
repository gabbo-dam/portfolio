import styled from 'styled-components'

export const StyledHomePageMainContent = styled.div`
  min-height: 100vh;
`
export const Container = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 25px;
  align-items: center;
  text-align: center;


  @media (min-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    margin-top: 0px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 40px;
  }
`
