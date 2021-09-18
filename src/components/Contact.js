import React, { useState } from 'react'
import { send } from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import { Form, Input, Textarea, FormContainer, StyledLabel, HorizontalLine, StyledText, SectionTitleContainer } from './style'
import { Button } from './Button'
require('dotenv').config()

export const Contact = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [emailSent, setEmailSent] =useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setToSend({ ...toSend, 
          name: '',
          email: '',
          message: '',
         })
         setEmailSent(true)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const handleCaptcha = (value) => {
    console.log("captcha value:", value)
  }


  return (
    <>
    {!emailSent && 
    <Form onSubmit={(e) => handleSubmit(e)}>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Kontakta oss.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      <StyledLabel htmlFor="name">Namn</StyledLabel>
      <Input
        id="name"
        name="name"
        placeholder="Namn"
        type="text"
        onChange={handleChange}
        required
      ></Input>

      <StyledLabel htmlFor="email">Epost</StyledLabel>
      <Input
        id="email"
        name="email"
        placeholder="Epost"
        type="email"
        onChange={handleChange}
        required
      ></Input>
      
      <FormContainer>
        <StyledLabel htmlFor="message">Meddelande</StyledLabel>
        {toSend.message.length}/200
      </FormContainer>

      <Textarea
        id="message"
        name="message"
        placeholder="Meddelande"
        type="text"
        onChange={handleChange}
        required
        maxLength="200"
      ></Textarea>

      <Button title='Skicka' bg='#343E3D' type="submit">
        Skicka
      </Button>

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={handleCaptcha}
      />
    </Form>    
    }

    {emailSent && 
    <Form>
      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Tack för ditt mail!</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>
    </Form>
    }
    </>
  )
}