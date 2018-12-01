import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Header = (props) => (
  <Div1>
    <Img1 fluid={props.bannerImage} />
    <Img2 fluid={props.logoImage} />
  </Div1>
)

const Div1 = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 300px;
  overflow: hidden;
`
const Img1 = styled(Img)`
  position: relative;
  top: 0;
  left: 0;
  /* width: 100vw; */
  height: 300px;
`
const Img2 = styled(Img)`
  width: 30%;
  position: absolute;
  bottom: 275px;
  left: 250px;
`

export default Header
