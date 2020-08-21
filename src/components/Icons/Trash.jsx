import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import styled from 'styled-components';
const Div = styled.div`
	:hover {
		cursor: pointer;
	}
`;

export default function TrashIcon(props) {
	return (
		<IconContext.Provider value={{ color: 'red' }}>
			<Div>
				<FaTrash onClick={() => props.clicked()} />
			</Div>
		</IconContext.Provider>
	);
}
