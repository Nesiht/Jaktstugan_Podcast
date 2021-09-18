import React from 'react'
import { Btn, StyledText } from './style'

export const Button = (props) => {
  return (
    <Btn bg={props.bg} onClick={(e) => {
      e.preventDefault();
      window.location.href=props.destination;
      }}>
      <StyledText>{props.title}</StyledText>
    </Btn>
  )
}