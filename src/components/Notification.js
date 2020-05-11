import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span1>Closed Temporarily</Span1> <br />
      Despite developing policies to open May 15th, we are not yet planning to open the store or take appointments.
      As you might be aware, there's also strong support against proceeding with Phase 1 at this time.
      The owners are using their best judgment and <u>tentatively</u> planning to open at the end of May or start of June.
      We thank you for your continued patience and hope you can understand all the risks we face when re-opening.
      As always, we greatly appreciate your heartfelt support for our barbers and Dulles Barber! <br />
      {/* <span role="img" aria-label="icon">🎉</span> */}
      {/* <span role="img" aria-label="icon">🐰</span> */}
      {/* <span role="img" aria-label="icon">🥚</span> */}
      <Span2>Last updated: May 11th, 2020</Span2>
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

export default Notification;
