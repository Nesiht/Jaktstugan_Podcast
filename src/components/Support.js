import React from 'react'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText } from './style'
// TEST STYLES
import { SmallCard } from './style'
import data from './support.json'


export const Support = () => {
  return (
    <SupportSection>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Stöd Podden.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      {data.map( (item ) => {
        return (
          <SmallCard key={item.title} bg={item.img}>
            <StyledText>{item.title}</StyledText>
          </SmallCard>
        )
      })}

    </SupportSection>
  )
}