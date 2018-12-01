import React from 'react'
import styled from 'styled-components'

const About = () => (
  <Section>
    <Form1 action="https://formspree.io/dullesbarber@gmail.com" method="POST">
      <ul>
        <li>
          <input type="hidden" name="From" value="dullesbarber.com" />
        </li>
        <li>
          <input type="hidden" name="_gotcha" />
        </li>
        <li>
          <p>Email us!</p>
        </li>
        <li>
          <Input1 type="text" name="First Name" placeholder="First Name" required />
        </li>
        <li>
          <Input1 type="text" name="Last Name" placeholder="Last Name" required />
        </li>
        <li>
          <Input1 type="email" name="Email" placeholder="Email" required />
        </li>
        <li>
          <Textarea1 type="text" name="Message" placeholder="Message" required></Textarea1>
        </li>
        <li>
          <Input1 type="submit" value="Send" />
        </li>
      </ul>
    </Form1>
  </Section >
)

const Section = styled.section`
  text-align: left;
  display: flex;
  justify-content: center;
`
const Form1 = styled.form`
  margin: 0 auto;
  text-align: center;
`
const Input1 = styled.input`
  width: 200px;
`
const Textarea1 = styled.textarea`
  width: 200px;
  height: 200px;
`

export default About
