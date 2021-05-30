import React from 'react'
import { Headercontainer, Headersection, Text, Logo, HorizontalLine } from './style'
import LogoSrc from '../img/JS_Logo_Transparent.png'


export const Header = () => {
  return (
    <Headercontainer>
      <Headersection>
        <Logo src={LogoSrc} />
      </Headersection>
      
      <Headersection justify='flex-end'>
        <Headersection width='none' justify='center' direction='column' align='flex-end'>
          <HorizontalLine />
            <Text case='uppercase'>Följ med oss på en resa genom djur och natur</Text>
          <HorizontalLine />
        </Headersection>
      </Headersection>
    
    </Headercontainer>
  )
}