import React from 'react'
import { Btn, StyledText } from './style'

export const Button = (props) => {
  return (
    <Btn bg={props.bg}>
      <StyledText case='uppercase'>{props.title}</StyledText>
    </Btn>
  )
}