import {initialState} from './context';

import { Context } from '@/interfaces';

import {  IUser, IReview } from '@/interfaces';

interface Action {
	type?: string;
	key?: string;
	payload?: any // eslint-disable-line
}

export const usersReducer = (state: IUser[], action: Action): IUser[] => {
	switch (action.type){
	case 'GET_USERS':
		return action.payload;
	case 'ADD_NEW_USER':
		return action.payload;
	case 'DELETE_USER':
		return action.payload;
	default:
		return state;
	}
};

export const currentUserReducer = (state: IUser | null, action: Action): IUser | null => {
	switch (action.type){
	case 'LOGIN_USER':
		return action.payload;
	case 'LOGOUT_USER':
		return initialState.currentUser;
	case 'ADD_FAVORITE_USER':
		if(state){ //initialState is null
			return  {
				...state,
				favorites: action.payload
			};
		} else return state;
	case 'REMOVE_FAVORITE_USER':
		if(state){ //initialState is null
			return  {
				...state,
				favorites: action.payload
			};
		} else return state;
	default:
		return state;
	}
};


export const reviewsReducer = (state: IReview[], action: Action): IReview[] => {
	switch (action.type){
	case 'GET_REVIEWS':
		return action.payload;
	case 'ADD_NEW_REVIEW':
		return 	[
			...state,
			action.payload
		];
	case 'DELETE_REVIEW':
		return action.payload;
	default:
		return state;
	}
};



export const mainReducer = ({ users, currentUser, reviews }: Context, action: Action): Context => ({
	users: usersReducer(users, action),
	currentUser: currentUserReducer(currentUser, action),
	reviews: reviewsReducer(reviews, action),
});
