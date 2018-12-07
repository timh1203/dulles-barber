import React from 'react'
import styled from 'styled-components'

const About = () => (
  <Section>
    <Form1 action="https://formspree.io/dullesbarber@gmail.com" method="POST">
      <Ul1>
        <li>
          <input type="hidden" name="From" value="dullesbarber.com" />
        </li>
        <li>
          <input type="hidden" name="_gotcha" />
        </li>
        <li>
          <H1a>Email us!</H1a>
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
          <Button1 type="submit">Send</Button1>
        </li>
      </Ul1>
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
  width: 60%;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: 0 5px 5px gray;
`
const H1a = styled.h1`
  font-size: 2rem;
  text-shadow: 1px 1px 2px gray;
  margin: 1rem auto;
`
const Ul1 = styled.ul`
`
const Input1 = styled.input`
  width: 50%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  `
const Textarea1 = styled.textarea`
  width: 50%;
  height: 200px;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
`
const Button1 = styled.button`
  width: 20%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  background: #3E9F56;
  color: white;
  border: 2px solid black;
  &:hover {
    cursor: pointer;
    background: white;
    color: black;
    transform: scale(1.10);
    border-radius: 5px;
    border: 2px solid #3E9F56;
  }
`

export default About
