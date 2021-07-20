import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.scss';

import Home from './pages/HomePage';

export default function App(): JSX.Element {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
}
