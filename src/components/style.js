import styled from 'styled-components'
import headerBg from '../img/header_bg.jpg'

// HEADER
export const Headercontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
  background-size: cover;
`

export const Headersection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: center;
  height: 50vh;
  width: 80vw;
`

export const Logo = styled.img`
  width: 272px;
  height: 272px;
  background-size: cover;
  filter: drop-shadow(0 0 0.75rem white);
`

export const Text = styled.p`
  color: white;
`