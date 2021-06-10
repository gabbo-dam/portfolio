import styled, { keyframes } from 'styled-components'

export const Open = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  display: block;
  cursor: pointer;
  transition: opacity 0.2s linear;
  &:hover{
    opacity: 0.8;
  }
`
export const Span = styled.span`
  display: block;
  float: left;
  clear: both;
  height: 4px;
  width: 40px;
  border-radius: 40px;
  background-color: #fff;
  position: absolute;
  right: 3px;
  top: 3px;
  overflow: hidden;
  transition: all 0.4s ease;
  &:nth-child(1) {
    margin-top: 10px;
    z-index: 9;
  }
  &:nth-child(2) {
    margin-top: 25px;
  }
  &:nth-child(3) {
    margin-top: 40px;
    }
`
export const SubMenu = styled.ul`
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  height: 0;
  width: 0;
  right: 0;
  top: 0;
  position: absolute;
  background-color: rgba(38, 84, 133, 0.54);
  border-radius: 50%;
  z-index: 18;
  overflow: hidden;
`
export const Item = styled.li`
  display: block;
  float: right;
  clear: both;
  height: auto;
  margin-right: -160px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:first-child {
    margin-top: 180px;
  }
  &:nth-child(1) {
    -webkit-transition-delay: 0.05s;
  }
  &:nth-child(2) {
    -webkit-transition-delay: 0.1s;
  }
  &:nth-child(3) {
    -webkit-transition-delay: 0.15s;
  }
  &:nth-child(4) {
    -webkit-transition-delay: 0.2s;
  }
  &:nth-child(5) {
    -webkit-transition-delay: 0.25s;
  }
`
export const Link = styled.a`
color: #fff;
font-family: "Lato", Arial, Helvetica, sans-serif;
font-size: 16px;
width: 100%;
display: block;
float: left;
line-height: 40px;
`

export const updown = keyframes`
  0%,
  50%,
  100% {
    transform: translatey(0);
  }
  20% {
    transform: translatey(5px);
  }
  25% {
    transform: translatey(-20px);
  }
  30% {
    transform: translatey(20px);
  }
  35% {
    transform: translatey(-5px);
  }
`;