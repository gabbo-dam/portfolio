import styled from 'styled-components'
import TitleProps from './types'

export const StyledTitle = styled.h2<TitleProps>`
  color: ${({ color = ''}) => color};
  font-size: ${({ size = '28px'}) => size}; 

  /* Fallback: Set a background color. */
  background-color: red;
  
  /* Create the gradient. */
  background-image: linear-gradient( #fd749b, #281AC8);
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
`
