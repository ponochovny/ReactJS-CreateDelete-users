import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		items: 3,
		liked: 0,
		favorite: 0,
	};
	handleInput(e) {
		// console.log(e.target.value);
		this.props.filterChange(e.target.value);
	}
	render() {
		return (
			<div style={{ marginBottom: '20px' }}>
				<div className="row">
					<div className="col-md-6">
						<h1>V.P.</h1>
					</div>
					<div className="col-md-6">
						<p className="lead text-right">
							Всего <strong>{this.state.items}</strong>.{' '}
							{this.state.liked} <FaHeart /> {this.state.favorite}{' '}
							<FaStar />
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<input
							className="form-control"
							type="text"
							style={{ width: '100%' }}
							placeholder="Поиск по записям"
							onChange={this.handleInput.bind(this)}
						/>
					</div>
					<button type="button" className="btn btn-primary">
						Все
					</button>
					<button type="button" className="btn btn-default">
						Понравилось
					</button>
				</div>
			</div>
		);
	}
}

export default Header;
