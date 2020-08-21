import React, { Component } from 'react';

class AddItem extends Component {
	state = {
		title: 'New user',
	};
	render() {
		return (
			<div className="row">
				<div className="col-md-10">
					<input
						className="form-control"
						type="text"
						style={{ width: '100%' }}
						placeholder="Название"
						value={this.state.title}
						onChange={(event) =>
							this.setState({ title: event.target.value })
						}
					/>
				</div>
				<button
					type="button"
					className={'btn btn-primary'}
					onClick={() => this.props.addItem(this.state.title)}
				>
					Добавить
				</button>
			</div>
		);
	}
}

export default AddItem;
