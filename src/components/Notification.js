import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span1>We have reopened since May 29th, 2020!</Span1> <br />
      Please read <strong>announcements</strong> for location hours and our procedures. <br />
      <A1 href="https://drive.google.com/file/d/1MWgopFhUnSP6rh0hzJunzDp5exU7Wc2h/view?usp=sharing" alt="Announcements PDF" target="_blank">Announcements</A1> <br /> <br />
      Please also look at <strong>available barbers</strong> before coming to sign up at our store. <br />
      <A1 href="https://drive.google.com/file/d/1tLeyZ3aaaSgMFLdBGrT8lj-KOqCFZHyZ/view?usp=sharing" alt="Available Barbers PDF" target="_blank">Available Barbers</A1> <br /> <br />
      Thank you for your understanding about our operations with limited staffing. <br />
      Please email us with any questions. Our barbers will <u>not</u> be answering the store phone. <br />
      We thank you so much for helping us reopen successfully and your continued support! <br />
      {/* <span role="img" aria-label="icon">🎉</span> */}
      {/* <span role="img" aria-label="icon">🐰</span> */}
      {/* <span role="img" aria-label="icon">🥚</span> */}
      <Span2>Last updated: May 30th, 2020</Span2>
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
  font-size: 2rem;
  line-height: 1.5;
  color: black;
  margin: 10px 0;
  width: 60%;
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
const A1 = styled.a`
  color: blue;
`

export default Notification;
