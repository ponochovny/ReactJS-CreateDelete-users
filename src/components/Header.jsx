import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		activeCategory: 'All',

		// items: 3,
		// liked: 0,
		// favorite: 0,
	};
	handleInput(e) {
		this.props.filterChange(e.target.value);
	}
	changeFilterCategory(value) {
		// alert(value);
		this.setState({ activeCategory: value });
		this.props.changeFilterCategory(value);
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
							Всего <strong>{this.props.itemsLength}</strong>.{' '}
							{this.props.likedLength} <FaHeart />{' '}
							{this.props.favoriteLength} <FaStar />
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10">
						<input
							className="form-control"
							type="text"
							style={{ width: '100%' }}
							placeholder="Поиск по записям"
							onChange={this.handleInput.bind(this)}
						/>
					</div>
					<button
						type="button"
						className={
							this.state.activeCategory === 'All'
								? 'btn btn-primary'
								: 'btn btn-default'
						}
						onClick={this.changeFilterCategory.bind(this, 'All')}
					>
						Все
					</button>
					<button
						type="button"
						className={
							this.state.activeCategory === 'Liked'
								? 'btn btn-primary'
								: 'btn btn-default'
						}
						onClick={this.changeFilterCategory.bind(this, 'Liked')}
					>
						Понравилось
					</button>
				</div>
			</div>
		);
	}
}

export default Header;
