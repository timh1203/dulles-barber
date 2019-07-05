import React from 'react';
import styled from 'styled-components';

const Notification = props => (
	<Div1>
		<P1>
      Stay cool and hydrated this summer! Having short hair helps too.
			{/* <span role="img" aria-label="icon">🎉</span> */}
			{/* <span role="img" aria-label="icon">🐰</span> */}
			{/* <span role="img" aria-label="icon">🥚</span> */}
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
const P1 = styled.div`
	font-size: 2rem;
	line-height: 1.5;
  color: black;
`;

export default Notification;
