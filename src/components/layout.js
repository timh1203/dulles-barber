import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header.js'
import Notification from '../components/Notification'
import Navigation from '../components/Navigation'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        },
        bannerImage: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { property: 'description', content: "Home page for Dulles Barber Shop located in Ashburn and Sterling, Virginia servicing men and children haircut needs. See address, hours, and contact information" },
            { property: 'keywords', content: "barber, barbershop, men, children, haircuts, flat top, skin fade, shampoo and cut, shear cut, head shave, beard trims, beard shaves, special cuts, ashburn, sterling, virginia" },
            { property: 'og:title', content: "Dulles Barber Shop in Ashburn and Sterling Area" },
            { property: 'og:type', content: "website" },
            { property: 'og:url', content: "https://dullesbarber.com/" },
            { property: 'og:image', content: "https://github.com/timh1203/dullesBarber/blob/master/src/assets/images/ashburn.jpg" },
            { property: 'og:description', content: "Dulles Barber is a privately owned family business that provides professional haircuts in the Loudoun County area serving the Ashburn and Sterling area for men and children haircuts. " },
            { property: 'og:site_name', content: "Dulles Barber Shop" },
            { property: 'og:image:secure_url', content: "https://github.com/timh1203/dullesBarber/blob/master/src/assets/images/ashburn.jpg" },
            { property: 'og:image:type', content: "image/jpeg" },
            { property: 'og:image:width', content: "200" },
            { property: 'og:image:height', content: "200" },
            { property: 'og:image:alt', content: "Dulles Barber Shop in Ashburn" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Wrapper>
          <Header
            bannerImage={data.bannerImage.childImageSharp.fluid}
            logoImage={data.logoImage.childImageSharp.fluid}
          />
          <Notification />
          <Navigation />
          {children}
        </Wrapper>

        <GlobalStyles />
      </>
    )}
  />
)

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    vertical-align: baseline;
  }
  html, body{
    /* max-width: 1024px; */
    /* width: 100%; */
    /* margin: 0 auto; */
    font-size: 62.5%;
    text-align: center;
    font-family: 'Quicksand';
    background: #f2f2f2;
  }
  h1 {
    font-size: 3.6rem;
    font-family: 'Lato';
  }
  h2 {
    font-size: 3.4rem;
  }
  h3 {
    font-size: 3.2rem;
  }
  h4 {
    font-size: 2.8rem;
  }
  h5 {
    font-size: 2.4rem;
  }
  h6 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section {
    margin-top: 5rem;
  }
`
const Wrapper = styled.div`
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
