import styled from 'styled-components'
import headerBg from '../img/header_bg.jpg'


// ################### Fonts ###################

export const StyledText = styled.p`
  font-family: 'Bodoni Moda', serif;
  letter-spacing: 1vw;
  font-size: 1.1rem;
  color: ${props => props.color || 'white'};
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`

export const RegularText = styled.p`
  font-family: 'Bodoni Moda', serif;
  font-size: 1rem;
  text-align: center;
`

// ################### * ###################

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`

export const SectionTitleContainer = styled.div`
  margin: 4vh 0vh;
`

export const HorizontalLine = styled.hr`
  width: 80vw;
  border: 1px solid lightgrey;
`
export const StyledA = styled.a`
  text-decoration: none;
`

// ################### Header ###################

export const StyledHeader = styled(StyledSection)`
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Logo = styled.img`
  width: 30vh;
  height: 25vh;
  background-size: cover;
  filter: drop-shadow(0 0 0.75rem white);
  margin-top: 5vh;
`




// ################### Author ###################

export const AuthorSection = styled(StyledSection)`
  height: auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  // height: 480px;
  background-color: white;
  box-shadow: 0px 1px 10px 1px black;
  border-radius: 8px;
  margin: 4vh 0vh;
`

export const UpperContainer = styled.div`
  height: 100px;
  // background: linear-gradient(to left, #607466, #343e3d);
  border-radius: 8px 8px 0px 0px;

  background-image: url(${props => props.bg || 'none'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const LowerContainer = styled.div`
  margin-top: 60px;
  text-align: center;
  margin-bottom: 2vh;
`

export const ImageContainer = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 5px;
  transform: translate(95px, 45px);
  border: 2px solid #607466;
  box-sizing: content-box;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const StyledH3 = styled.h3`
  font-family: "Lato", sans-serif;
`

export const StyledH2 = styled.h2`
  font-family: "Mate SC", serif;
`

export const Paragraph = styled.p`
  margin: 0px 15px;
  font-family: "Lato", sans-serif;
  line-height: 1.5;
`

// ################### Support ###################

export const SupportSection = styled(StyledSection)`
  height: auto;
`

export const SmallCard = styled.div`
  height: 12vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vw 0vw;
  background-image: url(${props => props.bg || 'none'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

// ################### Contact Form ###################

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #607466;
`

export const Input = styled.input`
  margin: 8px 0px;
  border: 1px solid #DC9E82;
  border-radius: 0.3rem;
  width: 80vw;
  padding: 0.7rem 0rem 0.7rem 0.7rem;
  font-size: 1rem;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const Textarea = styled.textarea`
  margin: 8px 0px;
  border: 1px solid #DC9E82;
  border-radius: 0.3rem;
  width: 80vw;
  height: 20vh;
  resize: none;
  font-size: 1rem;
  padding: 0.7rem 0rem 0.7rem 0.7rem;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const Button = styled.button`
  padding: 8px;
  margin: 8px 0px;
  width: 80vw;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // text-align: right;
  width: 80vw;
`

export const StyledLabel = styled.label`
  text-align: left;
  width: 80vw;
`


// ################### Button ###################

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: center;
`

export const Btn = styled.button`
  border: none;
  padding: 0px 30px 0px 38px;
  display: inline-block;
  background-color: ${props => props.bg || 'none'};
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
  width: 80vw;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  &:hover {
    background-color: #DC9E82;
  }
`


// ################### END ###################







