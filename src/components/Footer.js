import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Section>
    <p>Copyright © {new Date().getFullYear()} Dulles Barber. All rights reserved.</p>
  </Section>
)

const Section = styled.section`
  background: #171717;
  color: #666;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Footer
