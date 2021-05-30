import styled from 'styled-components'
import headerBg from '../img/header_bg.jpg'

// ################### Body ###################

export const Text = styled.p`
  color: ${props => props.color || 'white'};
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
  height: ${props => props.height || '50vh'};
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

export const Buttonsection = styled.div`
  display: flex;
  flex-direction: row;
`

// ################### Button ###################

export const Btn = styled.button`
  border: none;
  padding: 0px 30px 0px 38px;
  display: inline-block;
  background-color: ${props => props.bg || 'none'};
  margin: 4px 20px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  &:hover {
    background-color: #DC9E82;
  }
`
// ################### Body ###################

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`

export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  // background-color: #607466;
  margin-top: ${props => props.marginTop || 'none'};
`

export const AuthorSection = styled.div`
  display: flex;
  flex-directione: row;
  justify-content: center;
  margin-top: 5vh;
  // background-color: green;
`

export const AuthorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  // background-color: lightblue;
`

export const AuthorImg = styled.img`
  width: 8vw;
  height: 8vw;
  background-size: cover;
  filter: drop-shadow(0 0 0.75rem grey);
`

export const AuthorBio = styled.div`
  width: 90%;
  line-height: 4vh;
  text-align: ${props => props.align || 'left'};
  // font-weight: bold;
`