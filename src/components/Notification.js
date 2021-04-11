import React from 'react';
import styled from 'styled-components';

const Notification = (props) => (
  <Div1>
    <P1>
      <Span1>Normal Schedule Resumes, Virus Routines Remain</Span1> <br />
      Our business hours and barber schedules have returned to normal for both
      shops.
      <br />
      We kindly ask to{' '}
      <u>continue to bring your mask and to sanitize your hands</u>. <br />
      <br />
      We don't take appointments and only accept walk-ins. <br />
      Other common questions? Please see&nbsp;
      <a
        href='https://drive.google.com/file/d/13X64jkcf8rV74Ok5DCV7S9joVCN4VArN/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
      >
        additional information.
      </a>
      <br />
      <br />
      We thank you for your continued support in helping us stay safe and
      operational! <br />
      <Span2>Last updated: April 11th, 2021</Span2>
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
`;
const Span2 = styled.span`
  font-size: 1.4rem;
  text-decoration: underline;
`;

export default Notification;
