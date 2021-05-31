import React from 'react'
import { BodyContainer, BodySection,  HorizontalLine, Text, AuthorSection, AuthorCard, AuthorImg, AuthorBio } from './style'
import R_img from '../img/RT_Profil_transparent.png'
import J_img from '../img/JT_Profil_transparent.png'


export const Author = () => {
  return (
    <BodyContainer>
      <BodySection marginTop='50px'>
        
        <HorizontalLine />
          <Text case='uppercase' color='black'>Vilka är vi?</Text>
        <HorizontalLine />


        <AuthorSection>

          <AuthorCard>
            <AuthorImg src={R_img} />
            <AuthorBio>
              <Text color='black' size='20px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet est in egestas condimentum. Sed condimentum dictum consectetur. Quisque sed nibh id tortor blandit semper id eget nisi. Nulla facilisis enim ac egestas placerat. Duis at malesuada odio. Sed a sollicitudin tellus. In vulputate sem at dapibus molestie. Donec nec vestibulum odio, in pellentesque metus.</Text>
            </AuthorBio>

            <AuthorBio align='right'>
              <Text color='black'>- Rickard Kuhs Thorström</Text>
            </AuthorBio>
          </AuthorCard>








          <AuthorCard>
            <AuthorImg src={J_img} />
            <AuthorBio>
              <Text color='black' size='20px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet est in egestas condimentum. Sed condimentum dictum consectetur. Quisque sed nibh id tortor blandit semper id eget nisi. Nulla facilisis enim ac egestas placerat. Duis at malesuada odio. Sed a sollicitudin tellus. In vulputate sem at dapibus molestie. Donec nec vestibulum odio, in pellentesque metus.</Text>
            </AuthorBio>

            <AuthorBio align='right'>
              <Text color='black'>- Jimmy Tilja</Text>
            </AuthorBio>
          </AuthorCard>


        </AuthorSection>

      </BodySection>
    </BodyContainer>
  )
}