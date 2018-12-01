import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { links } from '../assets/data/data'
import { FaMapMarkedAlt, FaYelp, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const Ashburn = (props) => (
  <Section>
    <Div1>
      <Img1 fluid={props.ashburnImage} />
      <Div3>
        <a
          href={links.gmaps_ashburn.url}
          alt={links.gmaps_ashburn.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkedAlt1 />
        </a>
        <a
          href={links.yelp_ashburn.url}
          alt={links.yelp_ashburn.alt}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYelp1 />
        </a>
        <a
          href={links.fb_ashburn.url}
          alt={links.fb_ashburn.alt}
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
      </Div3>
    </Div1>
    <Div2>
      <H1a>Ashburn</H1a>
      <P1>
        Ashburn Farm Marketplace <br />
        43330 Junction Plaza Ste 134 <br />
        Ashburn, VA 20147 <br />
        <br />
        Monday–Friday 9-7PM <br />
        Saturday 9-6PM <br />
        Sunday 10-5PM <br />
        <br />
        703-858-0101
      </P1>
    </Div2>
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
  justify-content: center;
  width:40%;
`
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:40%;
  text-align: left;
`
const Div3 = styled.div`
  margin-bottom: 3rem;
`
const P1 = styled.p`
  font-size: 2rem;
`
const H1a = styled.h1`
  margin-bottom: 3rem;
  text-decoration: underline;
`
const Img1 = styled(Img)`
  width: 70%;
  margin-bottom: 3rem;
`
const FaMapMarkedAlt1 = styled(FaMapMarkedAlt)`
  color: #3E9F56;
  background: white;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 1rem;
`
const FaYelp1 = styled(FaYelp)`
  color: #D32323;
  background: white;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 1rem;
`
const FaFacebookSquare1 = styled(FaFacebookSquare)`
  color: #4267B2;
  background: white;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 1rem;
`
const FaTwitterSquare1 = styled(FaTwitterSquare)`
  color: white;
  background: #1C9BEA;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 1rem;
`

export default Ashburn
