import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styled from 'styled-components';
const Div = styled.div`
	margin: 0 5px 0 0;
	:hover {
		cursor: pointer;
	}
`;

export default function LikeIcon(props) {
	return (
		<IconContext.Provider value={{ color: props.active ? 'red' : 'gray' }}>
			<Div onClick={() => props.clicked()}>
				<FaHeart />
			</Div>
		</IconContext.Provider>
	);
}
