import React from 'react'
import { StyledHeader, Logo, HorizontalLine, StyledText, BtnContainer, SectionTitleContainer, StyledA } from './style'
import LogoSrc from '../img/JS_Logo_Transparent.png'
import { Button } from './Button'


export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={LogoSrc} />

      <SectionTitleContainer>
        <HorizontalLine />
        <StyledText>En podcast för alla jägare.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>
      
      <BtnContainer>
        <StyledA href="https://www.patreon.com/jaktstuganpodcast" target="_blank"> <Button title='Patreon' bg='#607466' /></StyledA>
        <StyledA href="https://open.spotify.com/show/1I7sB6okWbjCJJv4H5jRuD" target="_blank"><Button title='Lyssna' bg='#343E3D' /></StyledA>
      </BtnContainer>
    </StyledHeader>
  )
}