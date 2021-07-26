import React, {createContext } from 'react';

import { Context } from '@/interfaces';


export const initialState = {
	users: [],
	currentUser: null,
	reviews: []
};



export const AppContext = createContext<{
  state: Context;
  dispatch: React.Dispatch<any>; // eslint-disable-line
}>({
	state: initialState,
	dispatch: () => null
});
