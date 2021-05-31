import Title from '@atoms/title'

import SvgText from '@molecules/svgtext'


import HTML from '@atoms/svg/icons/html'
import CSS from '@atoms/svg/icons/css'
import JavaScript from '@atoms/svg/icons/javascript'
import TypeScript from '@atoms/svg/icons/typescript'
import ReactIcon from '@atoms/svg/icons/react'
import Next from '@atoms/svg/icons/next'

import Git from '@atoms/svg/icons/git'
import GitHub from '@atoms/svg/icons/github'
import NPM from '@atoms/svg/icons/npm'
import Node from '@atoms/svg/icons/node'
import Figma from '@atoms/svg/icons/figma'
import Photoshop from '@atoms/svg/icons/photoshop'
import Illustrator from '@atoms/svg/icons/illustrator'

import { StyledContainer, StyledTech, Background } from './styles'



const Tech: React.FC = () => {
  return(
    <StyledContainer>
      <Background>

      <Title>Tools and Technologies</Title>

      <StyledTech>
        <SvgText text='HTML'>
          <HTML />
        </SvgText>
        <SvgText text='CSS'>
          <CSS />
        </SvgText>
        <SvgText text='JavaScript'>
          <JavaScript />
        </SvgText>
        <SvgText text='TypeScript'>
          <TypeScript />
        </SvgText>
        <SvgText text='React'>
          <ReactIcon />
        </SvgText>
        <SvgText text='Next'>
          <Next />
        </SvgText>
        <SvgText text='Styled Components'>
          <Next />
        </SvgText>
        <SvgText text='Git'>
          <Git />
        </SvgText>
        <SvgText text='GitHub'>
          <GitHub />
        </SvgText>
        <SvgText text='NPM'>
          <NPM />
        </SvgText>
        <SvgText text='Node'>
          <Node />
        </SvgText>
        <SvgText text='Figma'>
          <Figma />
        </SvgText>
        <SvgText text='Photoshop'>
          <Photoshop />
        </SvgText>
        <SvgText text='Illustrator'>
          <Illustrator />
        </SvgText>
      </StyledTech>
      </Background>

    </StyledContainer>
  )
}

export default Tech