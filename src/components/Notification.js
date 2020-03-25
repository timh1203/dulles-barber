import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span2>Closed Temporarily</Span2> <br />
      Due to the current situation, we have decided to close our Ashburn and Sterling locations until further notice. <br />
      We greatly appreciate your understanding in the interest of your health and the general public. <br />
      At this time, we are not doing house calls or taking appointments. We are sorry for this inconvenience. <br />
      We are looking brightly to the future and will make new updates right here on our website first.
      {/* <span role="img" aria-label="icon">🎉</span> */}
      {/* <span role="img" aria-label="icon">🐰</span> */}
      {/* <span role="img" aria-label="icon">🥚</span> */}
    </P1>
    <P1>
    </P1>
  </Div1>
);

const Span2 = styled.span`
  color: red;
  font-weight: 700;
  text-decoration: underline;
  font-size: 2.8rem;
`
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
const P1 = styled.div`
  font-size: 2.4rem;
  line-height: 1.5;
  color: black;
  margin: 10px 0;
`;

export default Notification;
