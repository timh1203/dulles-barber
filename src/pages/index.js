import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Ashburn from '../components/Ashburn'
import Sterling from '../components/Sterling'
import About from '../components/About'
import Footer from '../components/Footer'

const HomePage = (props) => (
  <Layout>
    <Ashburn
      ashburnImage={props.data.ashburnImage.childImageSharp.fluid}
    />
    <Sterling
      sterlingImage={props.data.sterlingImage.childImageSharp.fluid}
    />
    <About
      profileImage={props.data.profileImage.childImageSharp.fluid}
    />
    <Footer />
  </Layout>
)

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
  }
`

export default HomePage
