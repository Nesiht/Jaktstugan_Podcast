import styled from 'styled-components'
import headerBg from '../img/_MGF2188_M.webp'
import { Parallax } from 'react-parallax'


// ################### Fonts ###################

export const StyledText = styled.p`
  font-family: 'Bodoni Moda', serif;
  letter-spacing: ${props => props.spaceing || '1vw'};
  font-size: 1.1rem;
  color: ${props => props.color || 'white'};
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;

  @media (min-width: 1920px) {
    letter-spacing: ${props => props.spaceing || '1vw'};
  }
`

export const RegularText = styled.p`
  font-family: 'Bodoni Moda', serif;
  font-size: 1rem;
  text-align: center;
`

export const Paragraph = styled.p`
  margin: 0px 15px;
  font-family: "Lato", sans-serif;
  line-height: 1.5;
  text-transform: ${props => props.transform ||'none'};
`

export const StyledH3 = styled.h3`
  font-family: "Lato", sans-serif;
  text-transform: ${props => props.transform ||'none'};

`

export const StyledH2 = styled.h2`
  font-family: "Mate SC", serif;
`

// ################### * ###################

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`
export const SupportSection = styled(StyledSection)`
  height: auto;
`

export const SectionTitleContainer = styled.div`
  margin: 4vh 0vh;
`

export const HorizontalLine = styled.hr`
  width: 80vw;
  border: 1px solid lightgrey;

  @media (min-width: 1366px) {
    width: 60vw;
  }

  @media (min-width: 1920px) {
    width: 40vw;
  }
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

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100vw;
  }

  @media (min-width: 1366px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 60vw;
  }

  @media (min-width: 1920px) {
    width: 50vw;
  }
`

export const BioCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  border-radius: 8px;
  margin: 4vh 0vh;
`

export const UpperContainer = styled.div`
  height: 100px;
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transform: translate(90px, 35px);
  border: 2px solid #fff;
  box-sizing: content-box;
  overflow: hidden;
`

export const BioImage = styled.img`
  width: 100%;
  height: auto;
`

// ################### Parallax ###################

export const SyledParSection = styled(StyledSection)`
  display: block;
  height: 30vh;

  @media (min-width: 1920px) {
    height: 40vh;
  }
`
export const StyledParallax = styled(Parallax)`
  height: 100%;
`

// ################### Linktree ###################

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30vh;
  width: 80vw;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 0.5s ease;
  }

  @media (min-width: 768px) {
    height: 20vh;
    width: 80vw;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1366px) {
    width: 60vw;
  }

  @media (min-width: 1920px) {
    width: 40vw;
  }
`

export const StyledCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20vw;
  overflow: hidden;
`

export const StyledCardImg = styled.img`
  position: relative;
  overlfow: hidden;
  width: 30vw;
  transform: translate(-25px, 0px);

  @media (min-width: 768px) {
    width: 15vw;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1366px) {
    width: 10vw;
  }

  @media (min-width: 1920px) {
    width: 5vw;
  }
`

export const StyledCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const StyledA = styled.a`
  text-decoration: none;
  margin: 5vw 0vw;

  &:visited {
    color: #000;
  }

  &:active {
    color: #000;
  }

  &:link {
    color: #000;
  }

  @media (min-width: 768px) {
    margin: 2vw 0vw;
  }
`

// ################### Partners ###################

export const PartnerContainer = styled.div`
  display: flex;
  height: auto;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`

export const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  text-align: center;
  margin-bottom: 3vh;

  @media (min-width: 1366px) {
    width: 60vw;
  }

  @media (min-width: 1920px) {
    width: 20vw;
  }
`

export const PartnerImg = styled.img`
  width: 60vw;
  background-size: cover;
  filter: drop-shadow(0 0 0.75rem white);

  @media (min-width: 768px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    width: 20vw;
  }

  @media (min-width: 1366px) {
    width: 20vw;
  }

  @media (min-width: 1920px) {
    width: 15vw;
  }
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
  
  @media (min-width: 1024px) {
    width: 40vw;
  }

  @media (min-width: 1366px) {
    width: 30vw;
  }
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

  @media (min-width: 1024px) {
    width: 40vw;
  }

  @media (min-width: 1366px) {
    width: 30vw;
  }
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
  width: 80vw;

  @media (min-width: 1024px) {
    width: 40vw;
  }

  @media (min-width: 1366px) {
    width: 30vw;
  }
`

export const StyledLabel = styled.label`
  text-align: left;
  width: 80vw;
  
  @media (min-width: 1024px) {
    width: 40vw;
  }

  @media (min-width: 1366px) {
    width: 30vw;
  }
`


// ################### Button ###################

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};

  @media (min-width: 1024px) {
    width: 60vw;
  }

  @media (min-width: 1366px) {
    width: 60vw;
  }
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

  @media (min-width: 1024px) {
    width: 30vw;
  }

  @media (min-width: 1366px) {
    width: 20vw;
  }
`


// ################### END ###################