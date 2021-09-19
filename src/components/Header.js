import React from 'react'
import { StyledHeader, Logo, HorizontalLine, StyledText, BtnContainer, SectionTitleContainer } from './style'
import LogoSrc from '../img/JS_Logo_Transparent.webp'
import { Button } from './Button'


export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={LogoSrc} alt="Jaktstugan Podcast logo" />

      <SectionTitleContainer bgc="rgba(91, 91, 91, 0.9)">
        <HorizontalLine />
          <StyledText>En podcast för alla jägare</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>
      
      <BtnContainer>
        <Button title='Patreon' bg='#607466' destination="https://www.patreon.com/jaktstuganpodcast" />
        <Button title='Lyssna' bg='#343E3D' destination="https://open.spotify.com/show/1I7sB6okWbjCJJv4H5jRuD" />
      </BtnContainer>
    </StyledHeader>
  )
}