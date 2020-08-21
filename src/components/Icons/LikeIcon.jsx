import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function LikeIcon(props) {
	return (
		<IconContext.Provider value={{ color: props.active ? 'red' : 'gray' }}>
			<div style={{ margin: '0 5px 0 0' }}>
				<FaHeart />
			</div>
		</IconContext.Provider>
	);
}
