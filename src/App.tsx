import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.scss';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MoviePage from './pages/movies/MoviePage';

import { useLocation } from 'react-router-dom';
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

export default function App(): JSX.Element {
	return (
		<>
			<ScrollToTop/>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/movies/:movie_id" component={MoviePage} />
			</Switch>
		</>
	);
}
