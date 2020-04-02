import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span1>Closed Temporarily</Span1> <br />
      Due to the current situation, we have closed our Ashburn and Sterling locations until further notice. <br />
      At this time, we are not doing house calls or taking appointments. We are sorry for this inconvenience. <br />
      Also, we greatly appreciate the influx of support from our customers but not accepting donations/gift cards purchases. <br />
      We are managing and aware of the government programs. We are looking brightly to the future and for now, <br />
      we are following mandated procedures until June. Please stay safe and we will make new updates right here on our website first. <br />
      We thank you for your understanding in the interest of your health and the general public. <br />
      {/* <span role="img" aria-label="icon">🎉</span> */}
      {/* <span role="img" aria-label="icon">🐰</span> */}
      {/* <span role="img" aria-label="icon">🥚</span> */}
      <Span2>Last updated: April 2nd, 2020</Span2>
    </P1>
  </Div1>
);

const Div1 = styled.div`
  background: #daa520;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 400px) {
    padding: 1rem;
  }
`;
const P1 = styled.p`
  font-size: 2.4rem;
  line-height: 1.5;
  color: black;
  margin: 10px 0;
`;
const Span1 = styled.span`
  color: red;
  font-weight: 700;
  text-decoration: underline;
  font-size: 2.8rem;
`
const Span2 = styled.span`
  font-size: 1.4rem;
  text-decoration: underline;
`;

export default Notification;
