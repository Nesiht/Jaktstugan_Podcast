import React from 'react'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText, StyledA } from './style'
import { SmallCard } from './style'


export const Linksection = (props) => {
  return (
    <SupportSection>
      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>{props.title}</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      {props.data.map(item => {
        if ( item.visible ) {
          return (
          <StyledA href={item.linkUrl} target="_blank" key={item.title} rel="noopener">
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