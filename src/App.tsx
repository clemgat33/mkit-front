import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/global.scss';

import { AppContext, initialState } from './state/context';
import { mainReducer } from './state/reducer';

import { getUsers, getUser, getReviews } from './API';

import { setLocalStorage, getLocalStorage } from '@/utils/index';

import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
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
	const [state, dispatch] = useReducer(mainReducer, initialState);


	useEffect(() => {
		getUsers()
			.then(({ data: { users } }) => {
				dispatch({
					type: 'GET_USERS',
					payload: users
				});
			})
			.catch((err: Error) => console.error(err));
		getReviews()
			.then(({ data: { reviews } }) => {
				dispatch({
					type: 'GET_REVIEWS',
					payload: reviews
				});
			})
			.catch((err: Error) => console.error(err));
	}, [dispatch]);

	useEffect(() => {
		const user_id = getLocalStorage('user_id', null);
		if (user_id) {
			getUser(user_id)
				.then((res) => {
					dispatch({
						type: 'LOGIN_USER',
						payload: res.user
					});
				})
				.catch((err: Error) => console.error(err));
		}
	}, []);

	useEffect(() => {
		const user_id = state.currentUser ?._id;
		setLocalStorage('user_id', user_id);
	}, [state.currentUser]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/account" component={AccountPage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/movies/:movie_id" component={MoviePage} />
			</Switch>
		</AppContext.Provider>
	);
}
