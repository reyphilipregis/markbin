import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

export default class BinsEditor extends Component {
	constructor(props) {
		super(props);
	}

	onEditorChange(content) {
		Meteor.call('bins.update', this.props.bin, content);
	}

	render() {
		const { content } = this.props.bin;

		return (
			<div className='col-xs-8'>
				<h5>Input</h5>
				<CodeMirror 
					value={content}
					options={{
						mode: 'markdown',
						lineNumbers: true
					}}

					onChange={ this.onEditorChange.bind(this) }
				/>
			</div>
		);
	}
}
