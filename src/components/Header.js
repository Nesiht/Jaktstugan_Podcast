import React from 'react'
import { Headercontainer, Headersection, Text, Logo, HorizontalLine, Buttonsection } from './style'
import LogoSrc from '../img/JS_Logo_Transparent.png'
import { Button } from './Button'


export const Header = () => {
  return (
    <Headercontainer>

      <Headersection>
        <Logo src={LogoSrc} />
      </Headersection>
      
      <Headersection justify='flex-end'>
        <Headersection width='none' justify='center' direction='column' align='center'>
          <HorizontalLine />
            <Text case='uppercase'>Följ med oss på en resa genom djur och natur</Text>
          <HorizontalLine />
            <Text size='0.9rem' spacing='none'>Stöd oss gärna på patreon eller lyssna på vårt senaste avsnitt</Text>
          <Buttonsection>
            <Button title='Patreon' bg='#607466'/>
            <Button title='Lyssna' bg='#343E3D'/>
          </Buttonsection>
        </Headersection>
      </Headersection>
    
    </Headercontainer>
  )
}