import styled from 'styled-components'

export const StyledMenu = styled.div`
  width: 30px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`
export const StyledLine = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: ${({ w = '100%' }) => w};
  height: 3px;
  align-self: ${({ align_self = 'auto' }) => align_self};
`
