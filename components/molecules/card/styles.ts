import styled from 'styled-components'
import Link from 'next/link'

import Container from '@atoms/container'
import Img from '@atoms/img'
import Anchor from '@atoms/anchor'
import Text from '@atoms/text'



export const StyledCard = styled(Container)`
  margin: 0 auto;
  background: #ffffff;
  border-radius: 40px ;
  color: #000000;
  text-align: center;
`
export const CardContent = styled(Container)`
  width: 80%;
  margin: 30px auto 10px auto;
  display: grid;
`
export const ButtonContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2,1fr);
`
export const CardFooter = styled(Container)`
  border-top: 1px solid #1E1B4E;
  padding: 15px 30px;
  font-family: "Roboto Slab", Sans-serif;
  font-weight: 400;
`
export const StyledImg = styled(Img)`
  border-radius: 37px 37px 0 0;
`
export const StyledAnchor = styled(Anchor)`
  color: #5700EF;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Roboto", Sans-serif;
  font-weight: 500;
`
export const StyledText = styled(Text)`
  line-height: 1.5;
  font-size: 14px;
  color: #777;
  font-family: "Roboto", Sans-serif;
  font-weight: 400;
`

