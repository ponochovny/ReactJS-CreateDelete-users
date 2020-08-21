import React, { Component } from 'react';

import Item from './Item';

class ItemsList extends Component {
	constructor(props) {
		super(props);
	}
	deleteHandler(id) {
		this.props.deleteHandler(id);
	}
	render() {
		return this.props.items.map((item) => {
			// if(this.props.filter.length > 0) {}
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
					/>
				);
			} else {
				return null;
			}
		});
	}
}

export default ItemsList;
