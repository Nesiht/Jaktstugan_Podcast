import React from 'react'
import { Headercontainer, Headersection, Text, Logo } from './style'
import LogoSrc from '../img/JS_Logo_Transparent.png'


export const Header = () => {
  return (
    <Headercontainer>
      <Headersection>
        <Logo src={LogoSrc} />
      </Headersection>
      
      <Headersection justify='flex-end'><Text>CTA HERE</Text></Headersection>
    
    </Headercontainer>
  )
}