import React from 'react'
import { SupportSection, StyledCard, StyledCardLeft, StyledCardRight, StyledCardImg, Paragraph, StyledH3 } from './style'
import { SectionTitleContainer, HorizontalLine, StyledText } from './style'


export const Linktree = (props) => {
  return (
    <>
    <SupportSection> 


      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>{props.title}</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>


      {props.data.map(item => {
        if ( item.visible ) {
          return (
          <StyledCard key={item.title}>

            <StyledCardLeft>
              <StyledCardImg src={item.img} />
            </StyledCardLeft>

            <StyledCardRight>
              <StyledH3 transform='uppercase'> {item.title} &#10140;</StyledH3>
              <Paragraph>{item.description}</Paragraph>
            </StyledCardRight>

          </StyledCard>
          )
        } else { return null }
      })}

    </SupportSection>
    </>
  )
}