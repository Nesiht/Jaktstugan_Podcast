import styled from 'styled-components'
import headerBg from '../img/header_bg.jpg'



// ################### Fonts ###################

export const StyledText = styled.p`
  font-family: 'Bodoni Moda', serif;
  letter-spacing: 0.4vw;
  font-size: 1.1rem;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`

export const RegularText = styled.p`
  font-family: 'Bodoni Moda', serif;
  font-size: 1rem;
`

// ################### * ###################

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
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

// ################### Button ###################

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
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







