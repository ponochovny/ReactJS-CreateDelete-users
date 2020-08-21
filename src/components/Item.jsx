import React, { Component } from 'react';
import styled from 'styled-components';

import FavIcon from './Icons/FavIcon';
import LikeIcon from './Icons/LikeIcon';
import TrashIcon from './Icons/Trash';

const Div = styled.div`
	display: flex;
	padding: 10px 20px;
	border-radius: 4px;
	border: 1px solid #ccc;
	margin-bottom: 7px;
`;

class Item extends Component {
	constructor(props) {
		super(props);
	}

	deleteHandler(id) {
		this.props.deleteHandler(id);
	}

	render() {
		return (
			<Div>
				{this.props.title} - {this.props.id}{' '}
				<FavIcon active={this.props.favorite} />{' '}
				<LikeIcon active={this.props.like} />
				<TrashIcon
					clicked={this.deleteHandler.bind(this, this.props.id)}
				/>
			</Div>
		);
	}
}

export default Item;
