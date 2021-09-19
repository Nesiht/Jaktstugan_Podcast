import React from 'react'
import { PartnerContainer, PartnerCard, PartnerImg, Paragraph } from './style'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText, StyledA } from './style'


export const Partners = (props) => {
  return (
    <SupportSection>
      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>{props.title}</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <PartnerContainer>
        {props.data.map(item => {
        if ( item.visible ) {
          return (
            <PartnerCard>
              <StyledA href={item.linkUrl} target="_blank" key={item.title} rel="noopener">
                <PartnerImg src={item.img} alt={item.alt} />
              </StyledA>
              <Paragraph>{item.bio}</Paragraph>
                <StyledText spaceing="0.3vw"><StyledA href={item.linkUrl} target="_blank" key={item.title} rel="noopener">Läs mer om {item.title}.</StyledA></StyledText>
            </PartnerCard>
          )
        } else { return null }
      })}

      </PartnerContainer>
    </SupportSection>
  )
}