import React from 'react';
import styled from 'styled-components';

const Notification = props => (
  <Div1>
    <P1>
      <Span1>Let's stay safe together</Span1> <br />
      Our barbers have returned to work and you can call the store to check their schedule. <br />
      <u>We don't take appointments</u> and only accept walk-ins. <br />
      We kindly ask to continue <u>bringing your mask and sanitizing your hands</u>. <br /><br />

      Want to know more? Please see&nbsp;<a href="https://drive.google.com/file/d/1K13Zh1QeoOX4qmIodGFvIWJwyqzJbebV/view?usp=sharing" target="_blank">additional information.</a><br /><br />
      A new holiday closure schedule is posted to help you plan for the rest of 2020. <br />
      We thank you for your continued support in helping us stay safe and operational! <br />
      <Span2>Last updated: August 26th, 2020</Span2>
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
  @media (max-width: 400px) {
    width: 100%;
  }
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
