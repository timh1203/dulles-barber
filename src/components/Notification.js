import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span1>Phase 2 reopening plans today!</Span1> <br />
      There have been some new changes in the announcements for store hours and entry policy and in the available barbers with changes in their hours. <br /> <br />
      <A1 href="https://drive.google.com/file/d/1xDwK-vFB8G-GDn88QATSRZRhkShDCmWB/view?usp=sharing" alt="Announcements Phase 2 PDF" target="_blank">Announcements, Phase 2</A1> <br />
      <A1 href="https://drive.google.com/file/d/1YT6UdtYhBBaKriZOI-Gq2NPW2gL7_F9l/view?usp=sharing" alt="Available Barbers Phase 2 PDF" target="_blank">Available Barbers, Phase 2</A1> <br /> <br />
      Please email us with any questions. Our barbers will <u>not</u> be answering the store phone. <br />
      We thank you so much for helping us reopen successfully and your continued support in this next phase! <br />
      {/* <span role="img" aria-label="icon">🎉</span> */}
      {/* <span role="img" aria-label="icon">🐰</span> */}
      {/* <span role="img" aria-label="icon">🥚</span> */}
      <Span2>Last updated: June 12th, 2020</Span2>
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
