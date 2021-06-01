import React, { useState } from 'react'
import { Form, Input, Textarea, FormContainer, StyledLabel } from './style'
import { Button } from './Button'

export const Contact = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Form onSubmit={(e) => handleLogin(e)}>
      <StyledLabel for="name">Namn</StyledLabel>
      <Input
        id="name"
        placeholder="Namn"
        type="text"
        onChange={(event) => setName(event.target.value)}
        required
      ></Input>

      <StyledLabel for="email">Epost</StyledLabel>
      <Input
        id="email"
        placeholder="Epost"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        required
      ></Input>
      
      <FormContainer>
        <StyledLabel for="message">Meddelande</StyledLabel>
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

      <Button title='Skicka' bg='#607466' type="submit" onClick={() => setCount(count + 1)}>
        Skicka
      </Button>

      <p>{name}</p>
      <p>{email}</p>
      <p>{message}</p>
    </Form>
  )
}