import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Accounts extends Component {
	componentDidMount() {
		// render blaze accounts form
		this.view = Blaze.render(
			Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container)
		);
	}

	componentWillUnmount() {
		// go find forms created and destroy
		Blaze.remove(this.view);
	}

	render () {
		return (
			<div ref='container'></div>
		);
	}
}
