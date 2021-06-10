import styled from 'styled-components'
import Link from 'next/link'

import Container from '@atoms/container'
import Img from '@atoms/img'
import Anchor from '@atoms/anchor'
import Text from '@atoms/text'

export const StyledCard = styled(Container)`
  margin: 0 auto;
  max-width: 350px;
  background: #ffffff;
  border-radius: 40px;
  position: relative;
  color: #000000;
  text-align: center;
  border: 1px solid #1e1b4e;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.36);
  padding-bottom: 60px;
`
export const CardContent = styled(Container)`
  width: 80%;
  min-height: 170px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const ButtonContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const CardFooter = styled(Container)`
  border-top: 1px solid #1e1b4e;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 30px;
  font-family: 'Roboto Slab', Sans-serif;
  font-weight: 400;
`
export const StyledImg = styled(Img)`
  border-radius: 40px 40px 0 0;
`
export const StyledAnchor = styled(Anchor)`
  color: #5700ef;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Roboto', Sans-serif;
  font-weight: 500;
`
export const StyledText = styled(Text)`
  line-height: 1.5;
  font-size: 14px;
  color: #777;
  font-family: 'Roboto', Sans-serif;
  font-weight: 400;
`
export const Date = styled(Text)`
  line-height: 1.5;
  font-size: 14px;
  color: #777;
  font-family: 'Roboto', Sans-serif;
  font-weight: 400;
`
