import React, { useState } from "react";
import { BaseContainer, HeaderTriangle, Content } from "./styling/globalStyleComponents";
import { ContactContainer, FormContainer, FormContainer1, SubmissionContainer, LinkContainer, P, H2, Form, Input, Textarea, Button } from "./styling/contactStyling";
import { Summary, H1 } from "./styling/bioStyling";
import * as Yup from "yup";
import axios from "axios";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [error, setError] = useState([null])

  const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please use a valid email address.")
      .required("Email address is required."),
    subject: Yup.string("Send without a subject?").required("Please provide a subject"),
    message: Yup.string().min(10, "Please enter your message.").required("A message is required")
  });


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

    const handleSubmit = async e => {
      e.preventDefault()
      window.document.getElementById("submit").style.display = "none"
      window.document.getElementById("loading").style.display = "block"

      schema.validate({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      })
        .then(valid => {
          axios.post("https://portfolio-ela.herokuapp.com/api/mess", form)
            .then(res => {
              window.document.getElementById("submitSuccess").style.display = "block"
              window.document.getElementById("form").style.display = "none"

            })
            .catch(err => {
              window.document.getElementById("loading").style.display = "none"
              window.document.getElementById("error").style.display = "block"
              window.document.getElementById("submit").style.display = "block"
              console.log(err.message)
            })
        })
        .catch(err => {
          setError(err.errors)
          window.document.getElementById("loading").style.display = "none"
          window.document.getElementById("invalid").style.display = "block"
          window.document.getElementById("submit").style.display = "block"
        })
    }


  return (
    <BaseContainer>
                  <HeaderTriangle />
            <Content>
            <Summary>
                    <H1>CONTACT</H1>
              </Summary>
            </Content>
      <ContactContainer>
        <FormContainer id="form" >
          <Form className="form" onSubmit={handleSubmit} >
            <Input type="text" name="name" id="name" placeholder="Name" className="formInput" onChange={handleChange} />
            <Input type="text" placeholder="Email" name="email" id="email" className="formInput" onChange={handleChange} />
            <Input type="text" placeholder="Subject" name="subject" id="subject" className="formInput" onChange={handleChange} />
            <Textarea
              placeholder="Message"
              id="message"
              rows="5"
              name="message"
              className="formInput message"
              onChange={handleChange} />
            <p className="error" id="invalid">{error}</p>
            <Button value="Submit" id="submit" className="submit" onClick={handleSubmit}>Submit</Button>
            <p className="loading" id="loading"></p>
            <p className="error" id="error">Sorry. There was an error submitting your form.</p>
          </Form>
        </FormContainer>
        <SubmissionContainer id="submitSuccess">
          <p>Thank you for submitting your message.</p>
          <p>I will be in contact as soon as possible.</p>
        </SubmissionContainer>
        <FormContainer1>
          <H2> Get in touch </H2>
          <P>If you have any questions or simply want to discuss possible opportunities, don't hesitate to contact me using this form.</P>
          <P>If you would prefer to use a personal email or LinkedIn, please use the links below.</P>
        </FormContainer1>
      </ContactContainer>
    </BaseContainer>
  );
}
