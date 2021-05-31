import React from 'react'
import { StyledHeader, Logo } from './style'
import LogoSrc from '../img/JS_Logo_Transparent.png'


export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={LogoSrc} />
      <div>SLOGAN</div>
      <div>BUTTONS</div>
    </StyledHeader>
  )
}