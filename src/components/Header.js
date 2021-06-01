import React from 'react'
import { StyledHeader, Logo, HorizontalLine, StyledText, BtnContainer, SectionTitleContainer } from './style'
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
        <Button title='Patreon' bg='#607466' />
        <Button title='Lyssna' bg='#343E3D' />
      </BtnContainer>
    </StyledHeader>
  )
}