import React from 'react'
import { Btn, StyledText } from './style'

export const Button = (props) => {
  return (
    <Btn bg={props.bg}>
      <StyledText>{props.title}</StyledText>
    </Btn>
  )
}