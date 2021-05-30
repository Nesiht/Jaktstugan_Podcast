import styled from 'styled-components'
import headerBg from '../img/header_bg.jpg'

// ################### Body ###################
export const Text = styled.p`
  color: white;
  font-family: 'Bodoni Moda', serif;
  text-transform:  ${props => props.case || 'none'};
  letter-spacing: ${props => props.spacing || '0.4vw'};
  font-size: ${props => props.size || '1.1rem'};
`

// ################### Header ###################
export const Headercontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-position: center;
  // background-attachment: fixed;
  background-size: cover;
`

export const Headersection = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'center'};
  height: 50vh;
  width: ${props => props.width || '80vw'};
  background-color: ${props => props.bg || 'none'};
`

export const Logo = styled.img`
  width: 16vw;
  height: 15vw;
  background-size: cover;
  filter: drop-shadow(0 0 0.75rem white);
`

export const HorizontalLine = styled.hr`
  width: 30vw;
  border: 1px solid lightgrey;
`


