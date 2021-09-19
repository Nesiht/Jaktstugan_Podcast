import React from 'react'
import { SyledParSection, StyledParallax } from './style'


export const ParallaxSection = (props) => {
  return (
    <SyledParSection>
      <StyledParallax bgImage={props.img} 
        strength={-300} />
    </SyledParSection>
  )
}