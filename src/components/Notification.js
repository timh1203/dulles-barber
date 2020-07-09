import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span1>We're now on Phase 3!</Span1> <br />
      We're now up to 75% capacity with social distancing in place and some changes in available barbers. <br /> <br />
      <A1 href="https://drive.google.com/file/d/1gb7XAnbx18c-2zbirfoqNAJhTSPSm1q1/view?usp=sharing" alt="Announcements Phase 3 PDF" target="_blank">Announcements, Phase 3</A1> <br />
      <A1 href="https://drive.google.com/file/d/1BUhfSq7kp7FEtu__rdc1XTrsdguh3qlQ/view?usp=sharing" alt="Available Barbers Phase 3 PDF" target="_blank">Available Barbers, Phase 3</A1> <br /> <br />
      Please email us with any questions. Our barbers will <u>not</u> be answering the store phone. <br />
      We thank you so much for helping us reopen successfully and your continued support! <br />
      {/* <span role="img" aria-label="icon">🎉</span> */}
      {/* <span role="img" aria-label="icon">🐰</span> */}
      {/* <span role="img" aria-label="icon">🥚</span> */}
      <Span2>Last updated: July 8th, 2020</Span2>
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
