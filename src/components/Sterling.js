import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { links } from '../assets/data/data'
import { FaMapMarkedAlt, FaYelp, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const Sterling = (props) => (
  <Section>
    <Div1>
      <H1a>Sterling</H1a>
      <Div2>
        <a
          href={links.gmaps_sterling.url}
          alt={links.gmaps_sterling.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkedAlt1 />
        </a>
        <a
          href={links.yelp_sterling.url}
          alt={links.yelp_sterling.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYelp1 />
        </a>
        <a
          href={links.fb_sterling.url}
          alt={links.fb_sterling.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare1 />
        </a>
        <a
          href={links.twitter.url}
          alt={links.twitter.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare1 />
        </a>
      </Div2>
      <P1>
        Cascades Marketplace <br />
        21000 Southbank Street Ste 108 <br />
        Sterling, VA 20165 <br />
        <br />
        Monday–Friday 9-7PM <br />
        Saturday 9-6:30PM <br />
        Sunday 10-5:30PM <br />
        <br />
        703-430-3434
      </P1>
    </Div1>
    <Div3>
      <Img1 fluid={props.sterlingImage} />
      <Div4>
        <Img2 fluid={props.visaImage} />
        <Img3 fluid={props.mastercardImage} />
        <Img4 fluid={props.wifiImage} />
      </Div4>
    </Div3>
  </Section>
)

const Section = styled.section`
  text-align: left;
  display: flex;
  justify-content: center;
`
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width:40%;
`
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:40%;
  text-align: left;
`
const Div2 = styled.div`
  /* margin-bottom: 3rem; */
`
const Div4 = styled.div`
      margin-bottom: 3rem;
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    `
const P1 = styled.p`
  font-size: 2rem;
`
const H1a = styled.h1`
  /* margin-bottom: 3rem; */
  text-decoration: underline;
`
const Img1 = styled(Img)`
  width: 70%;
  margin-bottom: 3rem;
  border-radius: 5px;
`
const Img2 = styled(Img)`
  width: 15%;
`
const Img3 = styled(Img)`
  width: 15%;
`
const Img4 = styled(Img)`
  width: 15%;
`
const FaMapMarkedAlt1 = styled(FaMapMarkedAlt)`
  color: #3E9F56;
  background: white;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
`
const FaYelp1 = styled(FaYelp)`
  color: #D32323;
  background: white;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
`
const FaFacebookSquare1 = styled(FaFacebookSquare)`
  color: #4267B2;
  background: white;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
`
const FaTwitterSquare1 = styled(FaTwitterSquare)`
  color: white;
  background: #1C9BEA;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
`

export default Sterling
