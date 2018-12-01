import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Ashburn from '../components/Ashburn'
import Sterling from '../components/Sterling'

const HomePage = (props) => (
  <Layout>
    <Ashburn
      ashburnImage={props.data.ashburnImage.childImageSharp.fluid}
    />
    <Sterling
      sterlingImage={props.data.sterlingImage.childImageSharp.fluid}
    />
    <h1>About Component</h1>
    <h1>Contact Component</h1>
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
  }
`

export default HomePage
