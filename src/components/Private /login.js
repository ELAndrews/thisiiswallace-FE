import React, { useState } from "react";
import { BaseContainer } from "../styling/globalStyleComponents";
import { FormContainer, Form, Input, H3, SubBtn } from "../styling/privateStyling"
import axios from "axios";

export default function Login() {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        e.preventDefault()
        window.document.getElementById("submit").style.display = "none"
        window.document.getElementById("loading").style.display = "block"

        // axios.post("https://portfolio-ela.herokuapp.com/api/message", form)
        //     .then(res => {
        //         window.document.getElementById("submitSuccess").style.display = "block"
        //         window.document.getElementById("form").style.display = "none"

        //     })
        //     .catch(err => {
        //         window.document.getElementById("loading").style.display = "none"
        //         window.document.getElementById("error").style.display = "block"
        //         window.document.getElementById("submit").style.display = "block"
        //         console.log(err.message)
        //     })

    }


    return (
        <FormContainer>
            <H3>Welcome back, Wallace</H3>
            <Form onSubmit={handleSubmit}>
                <Input name="username" type="text" placeholder="Username" onChange={handleChange} />
                <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
                <SubBtn value="Submit" id="submit" onClick={handleSubmit} />
                <p className="loading" id="loading"></p>
                <p className="error" id="error">Sorry. There was an error submitting your form.</p>
            </Form>
        </FormContainer>
    )
}