import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Ashburn from '../components/Ashburn'
import Sterling from '../components/Sterling'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = (props) => (
  <Layout>
    <Ashburn
      ashburnImage={props.data.ashburnImage.childImageSharp.fluid}
      visaImage={props.data.visaImage.childImageSharp.fluid}
      mastercardImage={props.data.mastercardImage.childImageSharp.fluid}
      wifiImage={props.data.wifiImage.childImageSharp.fluid}
    />
    <Hr />
    <Sterling
      sterlingImage={props.data.sterlingImage.childImageSharp.fluid}
      visaImage={props.data.visaImage.childImageSharp.fluid}
      mastercardImage={props.data.mastercardImage.childImageSharp.fluid}
      wifiImage={props.data.wifiImage.childImageSharp.fluid}
    />
    <Hr />
    <About
      profileImage={props.data.profileImage.childImageSharp.fluid}
      logoLongImage={props.data.logoLongImage.childImageSharp.fluid}
    />
    <Hr />
    <Contact />
    <Footer />
  </Layout>
)

const Hr = styled.hr`
  width: 20%;
  height: 3px;
  background: black;
  border-radius: 20px;
  margin: 4rem auto;
`
export const pageQuery = graphql`
  query {
    ashburnImage: file(relativePath: { eq: "ashburn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    sterlingImage: file(relativePath: { eq: "sterling.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    visaImage: file(relativePath: { eq: "visa.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    mastercardImage: file(relativePath: { eq: "mastercard.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    wifiImage: file(relativePath: { eq: "wifi.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    logoLongImage: file(relativePath: { eq: "logoLong.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`

export default HomePage
