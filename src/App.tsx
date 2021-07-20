import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.scss';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

export default function App(): JSX.Element {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/search" component={SearchPage} />
		</Switch>
	);
}
