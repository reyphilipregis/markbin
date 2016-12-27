import React, { Component } from 'react';

export default class BinsShare extends Component {
	constructor(props) {
		super(props);
	}

	share() {
		const email = this.refs.email.value;

		Meteor.call('bins.share', this.props.bin, email, (error, bin) => {
			this.refs.email.value = '';
		});
	}

	renderShareList() {
		return this.props.bin.sharedWith.map( (email) => {
			return <button key={email} className='btn btn-default'>
				{ email }
			</button>
		} );
	}

	render() {
		return (
			<div>
				<footer className='bins-share'>
					<div className='input-group'>
						<input ref='email' className='form-control' />
						<div className='input-group-btn'>
							<button
								onClick={ this.share.bind(this) }
								className='btn btn-default'>
								Share Bin
							</button>
						</div>
					</div>
					<div>
						Shared With:
					</div>
					<div className='btn-group'>
						{ this.renderShareList() }
					</div>
				</footer>
			</div>
		);
	}
}
