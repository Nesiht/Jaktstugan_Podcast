import React from 'react'
import { SupportSection, HorizontalLine, StyledText, SectionTitleContainer } from './style'
import { BioContainer, BioCard, UpperContainer, LowerContainer, ImageContainer, BioImage, StyledH3, StyledH2, Paragraph } from './style'
import data from './author.json'


export const Author = () => {
  return (
    <SupportSection>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Vilka är vi.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <BioContainer>
        {data.map( (item ) => {
            return (
              <BioCard key={item.name}>
                <UpperContainer bg={item.bg}>
                  <ImageContainer>
                    <BioImage src={item.img} />
                  </ImageContainer>
                </UpperContainer>
                <LowerContainer>
                  <StyledH3>{item.name}</StyledH3>
                  <StyledH2>{item.title}</StyledH2>
                  <Paragraph>
                    {item.bio}
                  </Paragraph>
                </LowerContainer>
              </BioCard>
            )
          })}
      </BioContainer>

    </SupportSection>
  )
}