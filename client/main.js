import React, { Component } from 'react';
import { render } 			from 'react-dom';
import App					from './components/app';
import { Bins } 			from '../imports/collections/bins';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

const routes = (
	<Router history={ browserHistory }>
		<Route path='/' component={ App }>

			<IndexRoute component={ BinsList } />

			<Route path='bins/:binId' component={ BinsMain } />
			
		</Route>
	</Router>
);

Meteor.startup( () => {
	render( routes, document.querySelector('.render-target') );
} );
