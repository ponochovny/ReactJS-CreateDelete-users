import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styled from 'styled-components';
const Div = styled.div`
	margin: 0 5px;
	:hover {
		cursor: pointer;
	}
`;

export default function FavIcon(props) {
	return (
		<IconContext.Provider
			value={{ color: props.active ? 'orange' : 'gray' }}
		>
			<Div onClick={() => props.clicked()}>
				<FaStar />
			</Div>
		</IconContext.Provider>
	);
}
