import React from 'react'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText, SupportCard, SupUpperContainer } from './style'


export const Support = () => {
  return (
    <SupportSection>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Stöd Podden.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <SupportCard>
        <SupUpperContainer>
          BILD
        </SupUpperContainer>
      </SupportCard>
      

    </SupportSection>
  )
}