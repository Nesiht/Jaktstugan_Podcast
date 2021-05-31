import React from 'react'
import { AuthorSection, RegularText, HorizontalLine, StyledText, AuthorCard, AuthorImg, AuthorBio } from './style'
import R_img from '../img/RT_Profil_transparent.png'
import J_img from '../img/JT_Profil_transparent.png'


export const Author = () => {
  return (
    <AuthorSection>
      <div>
        <HorizontalLine />
          <StyledText color='black'>Vilka är vi.</StyledText>
        <HorizontalLine />
      </div>

      <AuthorCard>
        <AuthorImg src={R_img} />
        <AuthorBio>
          <RegularText>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Maecenas imperdiet est in egestas 
          condimentum. Sed condimentum dictum 
          consectetur. Quisque sed nibh id tortor blandit 
          semper id eget nisi. Nulla facilisis enim ac egestas 
          placerat. Duis at malesuada odio. Sed a 
          sollicitudin tellus. In vulputate sem at dapibus 
          molestie. Donec nec vestibulum odio, in 
          pellentesque metus.
          </RegularText>
        </AuthorBio>
        <RegularText>- Rickard Kuhs Thorström</RegularText>
        <div>SOCIAL MEDIA</div>
      </AuthorCard>

    </AuthorSection>
  )
}