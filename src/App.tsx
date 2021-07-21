import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.scss';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/movies/MoviePage';

export default function App(): JSX.Element {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/search" component={SearchPage} />
			<Route path="/movies/:movie_id" component={MoviePage} />
		</Switch>
	);
}
