import React, { Component } from 'react';

import Item from './Item';

class ItemsList extends Component {
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
		let items = this.props.items;
		if (this.props.filterCategory === 'Liked') {
			items = items.filter((item) => item.liked);
		}
		return items.map((item) => {
			if (
				item.title.toLowerCase().match(this.props.filter.toLowerCase())
			) {
				return (
					<Item
						key={item.id}
						id={item.id}
						title={item.title}
						favorite={item.favorite}
						like={item.liked}
						deleteHandler={this.deleteHandler.bind(this)}
						favoriteHandler={this.favoriteHandler.bind(this)}
						likeHandler={this.likeHandler.bind(this)}
					/>
				);
			} else {
				return null;
			}
		});
	}
}

export default ItemsList;
