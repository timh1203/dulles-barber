import React from 'react'
import styled from 'styled-components'

const Notification = (props) => (
  <Div1>
    <P1>
      Wishing you a happy holiday season from all of us at Dulles Barber!
    </P1>
  </Div1>
)

const Div1 = styled.div`
  background: #DAA520;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
const P1 = styled.div`
  font-size: 2rem;
`

export default Notification
