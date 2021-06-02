import React from 'react'
import { AuthorSection, RegularText, HorizontalLine, StyledText, AuthorCard, AuthorImg, AuthorBio, SectionTitleContainer } from './style'
import { Container, Card, Uppdercontainer, Lowercontainer, ImageContainer, Image, StyledH3, StyledH2, Paragraph } from './style'
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

      {data.map( (item) => {
        return (
          <AuthorCard key={item.name}>
          <AuthorImg src={item.img} />
          <AuthorBio>
            <RegularText>
              {item.bio}
            </RegularText>
          </AuthorBio>
          <RegularText>{item.name}</RegularText>
        </AuthorCard>
        )
      })}

    <Container>
      <Card>
        <Uppdercontainer>
          <ImageContainer>
            <Image src="https://angry-lalande-cbce2a.netlify.app/assets/img/RT_Profil_transparent.png" />
          </ImageContainer>
        </Uppdercontainer>
        <Lowercontainer>
          <StyledH3>Rickard Kuhs Thorström</StyledH3>
          <StyledH2>Grundare</StyledH2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            turpis tortor, eleifend in ex nec, tempor interdum lacus.
            Suspendisse at metus at metus fringilla elementum sed id tellus.
            Proin volutpat rutrum libero, a bibendum tortor posuere sed. Proin
            ultrices ex ut purus interdum molestie. Maecenas ac aliquet enim.
            Maecenas euismod.
          </Paragraph>
        </Lowercontainer>
      </Card>
    </Container>

     </AuthorSection>
  )
}