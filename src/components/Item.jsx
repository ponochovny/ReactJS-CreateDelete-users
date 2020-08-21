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

	favoriteHandler(id) {
		this.props.favoriteHandler(id);
	}

	likeHandler(id) {
		this.props.likeHandler(id);
	}

	render() {
		return (
			<Div>
				{this.props.title} - {this.props.id}{' '}
				<FavIcon
					active={this.props.favorite}
					onClick={this.clickHandler}
					clicked={this.favoriteHandler.bind(this, this.props.id)}
				/>{' '}
				<LikeIcon
					active={this.props.like}
					clicked={this.likeHandler.bind(this, this.props.id)}
				/>
				<TrashIcon
					clicked={this.deleteHandler.bind(this, this.props.id)}
				/>
			</Div>
		);
	}
}

export default Item;
