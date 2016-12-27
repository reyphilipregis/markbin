import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

export default class Header extends Component {
	createBin (event) {
		event.preventDefault();

		Meteor.call('bins.insert', (error, binId) => {
			const url = `/bins/${binId}`;

			browserHistory.push(url);
		});
	}

	render () {
		return (
			<div>
				<nav className='nav navbar-default'>
					<div className='navbar-header'>
						<Link to='/' className='navbar-brand'>
							Markbin
						</Link>
					</div>
					<ul className='nav navbar-nav'>
						<li>
							<Accounts />
						</li>
						<li>
							<a href='#' onClick={ this.createBin.bind(this) }>Create Bin</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
