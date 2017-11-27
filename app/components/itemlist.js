import React, { PropTypes } from 'react';
import ReactDOM from 'react';

import ListItem from './listitem.js';

class ItemList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			listItems: [],
			view:      'list',
		};
	}

	/* Render the list of items. */
	renderListItems() {
		const { listItems, view } = this.state;

		return listItems.map((item, i)) => {
			return (
				<ListItem
					view = {view}
					id = {item.id}
					name = {item.name}
					amount = {item.amount}
					pic = {item.pic}
					index = {i}
				/>
			)
		}
	}

	/* Render the component. */
	render() {
		const { view } = this.state;

		return (
			<div className = {view}>
				<ul>
					{ this.renderListItems() }
				</ul>
			</div>
		)
	}
}

export default ItemList