import React from 'react'
import { Btn, Text } from './style'

export const Button = (props) => {
  return (
    <Btn bg={props.bg}>
      <Text case='uppercase'>{props.title}</Text>
    </Btn>
  )
}