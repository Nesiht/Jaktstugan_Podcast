import React from 'react'
import { SyledParSection, StyledParallax } from './style'

// ../assets/img/nature_1.jpg
// ../img/header_bg.jpg

export const ParallaxSection = (props) => {
  return (
    <SyledParSection>
      <StyledParallax bgImage={props.img} 
        strength={-300} />
    </SyledParSection>
  )
}