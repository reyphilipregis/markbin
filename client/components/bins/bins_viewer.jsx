import React, { Component } from 'react';
import { markdown } from 'markdown';

export default class BinsViewer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rawHtml = markdown.toHTML(this.props.bin.content);

		return (
			<div className='col-xs-4'>
				<h5>Output</h5>
				<div dangerouslySetInnerHTML={{ __html: rawHtml }}>
				</div>
			</div>
		);
	}
}
