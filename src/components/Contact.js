import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Form, Input, Textarea, FormContainer, StyledLabel, HorizontalLine, StyledText, SectionTitleContainer } from './style'
import { Button } from './Button'
require('dotenv').config()

export const Contact = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleCaptcha = (value) => {
    console.log("captcha value:", value)
  }
  




  return (
    <Form onSubmit={(e) => handleSubmit(e)}>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Kontakta oss.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <StyledLabel htmlFor="name">Namn</StyledLabel>
      <Input
        id="name"
        placeholder="Namn"
        type="text"
        onChange={(event) => setName(event.target.value)}
        required
      ></Input>

      <StyledLabel htmlFor="email">Epost</StyledLabel>
      <Input
        id="email"
        placeholder="Epost"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        required
      ></Input>
      
      <FormContainer>
        <StyledLabel htmlFor="message">Meddelande</StyledLabel>
        {message.length}/200
      </FormContainer>

      <Textarea
        id="message"
        placeholder="Meddelande"
        type="text"
        onChange={(event) => setMessage(event.target.value)}
        required
        maxLength="200"
      ></Textarea>

      <Button title='Skicka' bg='#343E3D' type="submit" onClick={() => setCount(count + 1)}>
        Skicka
      </Button>

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={handleCaptcha}
      />

      <p>{name}</p>
      <p>{email}</p>
      <p>{message}</p>
    </Form>
  )
}