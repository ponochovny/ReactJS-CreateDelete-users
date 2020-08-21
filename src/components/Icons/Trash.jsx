import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function TrashIcon(props) {
	const clickHandler = () => {
		props.clicked();
	};
	return (
		<IconContext.Provider value={{ color: 'red' }}>
			<div>
				<FaTrash onClick={clickHandler} />
			</div>
		</IconContext.Provider>
	);
}
