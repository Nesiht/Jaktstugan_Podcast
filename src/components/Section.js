import React from 'react'
import { BodyContainer, BodySection,  HorizontalLine, Text } from '../components/style'

export const Section = () => {
  return (
    <BodyContainer>
      <BodySection marginTop='50px'>
        <HorizontalLine />
          <Text case='uppercase' color='black'>Vilka är vi?</Text>
        <HorizontalLine />
      </BodySection>
    </BodyContainer>
  )
}