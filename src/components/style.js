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

export const AuthorCard = styled(StyledSection)`
  justify-content: center;
  height: auto;
  margin: 8vh 0vh;
`

export const AuthorImg = styled.img`
  width: 40vw;
  height: 40vw;
  background-size: cover;
  filter: drop-shadow(0 0 0.75rem grey);
`

export const AuthorBio = styled.div`
  width: 80vw;
  line-height: 4vh;
  text-align: ${props => props.align || 'left'};
  // font-weight: bold;
`

// export const AuthorSection = styled.div`
//   display: flex;
//   flex-directione: row;
//   justify-content: center;
//   margin-top: 5vh;
//   // background-color: green;
// `

// export const AuthorCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 40vw;
//   // background-color: lightblue;
// `

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
  border: 1px solid #607466;
  border-radius: 0.3rem;
  width: 80vw;
  padding: 0.7rem 0rem 0.7rem 0.7rem;
  font-size: 1rem;
`

export const Textarea = styled.textarea`
  margin: 8px 0px;
  border: 1px solid #607466;
  border-radius: 0.3rem;
  width: 80vw;
  height: 20vh;
  resize: none;
  font-size: 1rem;
  padding: 0.7rem 0rem 0.7rem 0.7rem;
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







