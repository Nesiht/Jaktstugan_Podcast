import React from 'react'
import { Parallax } from 'react-parallax'

// ../assets/img/nature_1.jpg
// ../img/header_bg.jpg

export const ParallaxSection = (props) => {
  return (
    <Parallax bgImage={props.img} style={{
      height: '15vh',
      }}
      strength={100} />
  )
}