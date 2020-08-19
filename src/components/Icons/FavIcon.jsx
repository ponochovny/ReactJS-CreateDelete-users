import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function FavIcon(props) {
	return (
		<IconContext.Provider
			value={{ color: props.active ? 'yellow' : 'gray' }}
		>
			<div style={{ margin: '0 5px' }}>
				<FaStar />
			</div>
		</IconContext.Provider>
	);
}
