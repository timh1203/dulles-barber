import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const About = (props) => (
  <Section>
    <Div1>
      <Img1 fluid={props.profileImage} />
    </Div1>
    <Div2>
      <p>
        Dulles Barber is a privately owned family business that provides professional haircuts in the Loudoun County area. Our seasoned barbers have more than 10 years of experience and also diligently mentor newer barbers. <br />
        <br />
        We provide a wide range of services for adults and children including beard trims to skin fades. Enjoy our big screen televisions and magazine varieties while we meticulously apply our craft for each and every patron.<br />
        <br />
        After your haircut, we offer a complimentary mini-massage and hot towel. Our customers leave feeling great and always compliment on the service.<br />
        <br />
        We welcome you to visit us and thank you for checking us out! If we can make your experience better in any way, please let us know.<br />
        <br />
        <Span1>Timothy</Span1><br />
        I.T. Manager
      </p>
    </Div2>
  </Section>
)

const Section = styled.section`
  text-align: left;
  display: flex;
  justify-content: center;
`
const Div1 = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`
const Div2 = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`
const Img1 = styled(Img)`
  width: 80%;
  border-radius: 5px;
`
const Span1 = styled.span`
  font-family: "Pacifico";
`

export default About
