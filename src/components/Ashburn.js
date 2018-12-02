import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { links } from '../assets/data/data'
import { FaMapMarkedAlt, FaYelp, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const Ashburn = (props) => (
  <Section>
    <Div1>
      <H1a>Ashburn</H1a>
      <Div2>
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
      </Div2>
      <P1>
        Ashburn Farm Marketplace <br />
        43330 Junction Plaza Ste 134 <br />
        Ashburn, VA 20147 <br />
        <br />
        Monday–Friday 9-7PM <br />
        Saturday 9-6PM <br />
        Sunday 10-5PM <br />
        <br />
        <Span1>(703)858-0101</Span1>
      </P1>
    </Div1>
    <Div3>
      <Img1 fluid={props.ashburnImage} />
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
  line-height: 1.4;
`
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
`
const Div2 = styled.div`
  margin: 2rem 0;
`
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`
const Div4 = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
const P1 = styled.p`
  font-size: 2rem;
  letter-spacing: 1.5px;
  text-align: center;
`
const H1a = styled.h1`
  text-decoration: underline;
  text-shadow: 1px 1px 2px gray;
  background: #f2f2f2;
  border-radius: 10px;
  border: 2px solid white;
  padding: 0.5rem 5rem;
  box-shadow: 0 5px 5px gray;
`
const Span1 = styled.span`
  font-size: 2rem;
  letter-spacing: 6px;
  font-weight: 700;
`
const Img1 = styled(Img)`
  width: 70%;
  margin-bottom: 3rem;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
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
  background: #f2f2f2;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
  &:hover {
    transform: scale(1.10);
    background: #3E9F56;
    color: white;
    border-radius: 5px;
  }
`
const FaYelp1 = styled(FaYelp)`
  color: #D32323;
  background: #f2f2f2;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
  &:hover {
    transform: scale(1.10);
    background: #D32323;
    color: white;
    border-radius: 5px;
  }
`
const FaFacebookSquare1 = styled(FaFacebookSquare)`
  color: #4267B2;
  background: #f2f2f2;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  margin: 0 1rem;
  &:hover {
    transform: scale(1.10);
    background: #4267B2;
    color: white;
    border-radius: 5px;
  }
`
const FaTwitterSquare1 = styled(FaTwitterSquare)`
  color: #1C9BEA;
  background: #f2f2f2;
  border-radius: 2px;
  width: 51px;
  height: 51px;
  margin: 0 1rem;
  &:hover {
    transform: scale(1.10);
    color: white;
    background: #1C9BEA;
    border-radius: 5px;
  }
`

export default Ashburn
