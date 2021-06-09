import React from 'react'
import { AuthorSection, HorizontalLine, StyledText, SectionTitleContainer } from './style'
import { Container, Card, UpperContainer, LowerContainer, ImageContainer, Image, StyledH3, StyledH2, Paragraph } from './style'
// import R_img from '../img/RT_Profil_transparent.png'
// import J_img from '../img/JT_Profil_transparent.png'
import data from './author.json'


export const Author = () => {
  return (
    <AuthorSection>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Vilka är vi.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <Container>
        {data.map( (item ) => {
            return (
              <Card key={item.name}>
                <UpperContainer>
                  <ImageContainer>
                    <Image src={item.img} />
                  </ImageContainer>
                </UpperContainer>
                <LowerContainer>
                  <StyledH3>{item.name}</StyledH3>
                  <StyledH2>{item.title}</StyledH2>
                  <Paragraph>
                    {item.bio}
                  </Paragraph>
                </LowerContainer>
              </Card>
            )
          })}
      </Container>

    </AuthorSection>
  )
}