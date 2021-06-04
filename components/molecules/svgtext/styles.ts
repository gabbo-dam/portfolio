import styled, { keyframes } from 'styled-components'


import Text from '@atoms/text'
import Container from '@atoms/container'

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const StyledContainer = styled(Container)`
  padding: 20px;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  filter: blur(6px);
`
export const StyledText = styled(Text)`
  margin-top: 15px;
`