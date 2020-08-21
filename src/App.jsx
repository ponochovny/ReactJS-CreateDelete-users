import React, { Component } from 'react';

import Header from './components/Header';
import ItemsList from './components/ItemsList';
import AddItem from './components/AddItem';

class App extends Component {
	state = {
		filter: '',
		filterCategory: 'All',
		items: [
			{ id: 1, title: 'Johan', liked: false, favorite: false },
			{ id: 2, title: 'Jordge', liked: false, favorite: false },
			{ id: 3, title: 'Mike', liked: false, favorite: false },
		],
	};
	changeFilterCategory(value) {
		this.setState({ filterCategory: value });
		// alert(value);
	}
	filterChange(value) {
		this.setState({
			filter: value,
		});
	}
	deleteHandler(id) {
		const newItems = this.state.items.filter((elem) => elem.id != id);
		this.setState({ items: [...newItems] });
	}
	favoriteHandler(id) {
		const index = this.state.items.findIndex((elem) => elem.id === id);

		let newItems = this.state.items;
		newItems[index] = {
			...newItems[index],
			favorite: !newItems[index].favorite,
		};

		this.setState({ items: newItems });
	}
	likeHandler(id) {
		const index = this.state.items.findIndex((elem) => elem.id === id);

		let newItems = this.state.items;
		newItems[index] = {
			...newItems[index],
			liked: !newItems[index].liked,
		};

		this.setState({ items: newItems });
	}
	addItemHandler(value) {
		const newId = this.state.items[this.state.items.length - 1].id + 1;
		const newItem = {
			id: newId,
			title: value,
			liked: false,
			favorite: false,
		};
		const newArray = this.state.items;
		newArray.push(newItem);
		this.setState({ items: newArray });
	}
	render() {
		return (
			<div className="container">
				<Header
					filterChange={this.filterChange.bind(this)}
					changeFilterCategory={this.changeFilterCategory.bind(this)}
				/>
				<div style={{ marginBottom: 20 }}>
					<ItemsList
						items={this.state.items}
						filter={this.state.filter}
						filterCategory={this.state.filterCategory}
						deleteHandler={this.deleteHandler.bind(this)}
						favoriteHandler={this.favoriteHandler.bind(this)}
						likeHandler={this.likeHandler.bind(this)}
					/>
				</div>
				<AddItem addItem={this.addItemHandler.bind(this)} />
			</div>
		);
	}
}

export default App;
