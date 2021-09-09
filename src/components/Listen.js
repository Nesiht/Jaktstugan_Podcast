import React from 'react'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText, StyledA} from './style'

import { SmallCard } from './style'
import data from './listen.json'

export const Listen = () => {
  return (
    <SupportSection>
      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Lyssna på podden</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      {data.map(item => {
        if ( item.visible ) {
          return (
          <StyledA href={item.linkUrl} target="_blank" key={item.title}>
            <SmallCard bg={item.img}>
              <StyledText>{item.title}</StyledText>
            </SmallCard>
          </StyledA>
          )
        } else { return null }
      })}

    </SupportSection>
  )
}