import React, { useState } from 'react'
import { send } from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import { Form, Input, Textarea, FormContainer, StyledLabel, HorizontalLine, StyledText, SectionTitleContainer, Btn } from './style'
require('dotenv').config()

export const Contact = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [emailSent, setEmailSent] = useState(false)
  const [disableBtn, setdisableBtn] = useState(true)


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
    setdisableBtn(!disableBtn)
  }


  return (
    <>
    {!emailSent && 
    <Form onSubmit={(event) => handleSubmit(event)}>

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
      />

      <StyledLabel htmlFor="email">Epost</StyledLabel>
      <Input
        id="email"
        name="email"
        placeholder="Epost"
        type="email"
        required
        onChange={handleChange}
      />
      
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
      />

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={handleCaptcha}
      />

      <Btn title='Skicka' bg='#343E3D' type="submit" disabled={disableBtn} >
        <StyledText>Skicka</StyledText>
      </Btn>

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