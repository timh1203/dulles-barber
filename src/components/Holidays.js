import React from 'react'
import styled from 'styled-components'

const Holidays = () => (
  <Section>
    <Hr id="holidays" />
    <Div>
      <H1a>Holiday Closings</H1a>
      <P1>Our stores will be closed on the following holidays:</P1> <br /> <br />
      <P1>Christmas Day (December 25<sup>th</sup>, 2020)</P1> <br />
      <P1>New Year's Day (January 1<sup>st</sup>, 2021)</P1> <br />
      <P1>Easter (April 4<sup>th</sup>, 2021)</P1> <br />
      <P1>Memorial Day (May 31<sup>st</sup>, 2021)</P1> <br />
      <P1>Independence Day (July 4<sup>th</sup>, 2021)</P1> <br />
      <P1>Thanksgiving Day (November 25<sup>th</sup>, 2021)</P1> <br />
      <P1>Christmas Day (December 25<sup>th</sup>, 2021)</P1> <br />
    </Div>
  </Section>
)

const Section = styled.section`
`
const Div = styled.div`
  line-height: 1.4;
  margin-bottom: 5rem;
  @media (max-width: 400px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`
const Hr = styled.hr`
  width: 20%;
  height: 3px;
  background: black;
  border-radius: 20px;
  margin: 4rem auto;
  @media (max-width: 769px) {
    width: 40%;
    margin: 5rem auto;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`
const P1 = styled.p`
  font-size: 2rem;
  letter-spacing: 1.5px;
  text-align: center;
  display: block;
  @media (max-width: 400px) {
    margin-bottom: 1rem;
  }
`
const H1a = styled.h1`
  width: 20%;
  margin: auto;
  text-decoration: underline;
  text-shadow: 1px 1px 2px gray;
  background: #f2f2f2;
  border-radius: 10px;
  border: 2px solid white;
  padding: 0.5rem 5rem;
  box-shadow: 0 5px 5px gray;
  margin-bottom: 2rem;
  @media (max-width: 400px) {
    margin-bottom: 2rem;
    text-align: center;
    width: 35%;
  }
`

export default Holidays
