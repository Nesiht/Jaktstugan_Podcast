import styled from 'styled-components'
import headerBg from '../img/header_bg.jpg'

// HEADER
export const Headercontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
  background-size: cover;
`