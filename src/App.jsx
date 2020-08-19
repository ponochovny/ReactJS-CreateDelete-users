import React, { Component } from 'react';

import Header from './components/Header';
import ItemsList from './components/ItemsList';

class App extends Component {
	state = {
		filter: '',
		items: [
			{ id: 1, title: 'Johan', liked: false, favorite: false },
			{ id: 2, title: 'Jordge', liked: false, favorite: false },
			{ id: 3, title: 'Mike', liked: false, favorite: false },
		],
	};
	filterChange(value) {
		this.setState({
			filter: value,
		});
	}
	render() {
		return (
			<div className="container">
				<Header filterChange={this.filterChange.bind(this)} />
				<ItemsList
					items={this.state.items}
					filter={this.state.filter}
				/>
			</div>
		);
	}
}

export default App;
