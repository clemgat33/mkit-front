import axios, { AxiosResponse } from 'axios';

import { ApiDataTypeUser, IUser, ApiDataTypeMovie, ApiDataTypeMovies } from '@/interfaces';

const baseUrl = 'http://localhost:7000/api';


//GET USERS
export const getUsers = async (): Promise<AxiosResponse<ApiDataTypeUser>> => {
	try {
		const users: AxiosResponse<ApiDataTypeUser> = await axios.get(
			baseUrl + '/users'
		);
		return users;
	} catch (error) {
		throw new Error(error);
	}
};


//GET USER
export const getUser = async (user_id: string): Promise<ApiDataTypeUser> => {
	try {
		const user: AxiosResponse<ApiDataTypeUser> = await axios.get(
			baseUrl + '/user/' + user_id
		);
		return user.data;
	} catch (error) {
		throw new Error(error);
	}
};


// ADD USER
export const addUser = async ( body: IUser ): Promise<ApiDataTypeUser> => {
	try {
		const user: Omit<IUser, '_id'> = body;
		const saveUser: AxiosResponse<ApiDataTypeUser> = await axios.post(
			baseUrl + '/add-user',
			user
		);
		return saveUser.data;
	} catch (error) {
		throw new Error(error);
	}
};


// UPDATE USER
export const updateUser = async ( user: IUser ): Promise<ApiDataTypeUser> => {
	try {
		const updatedUser: AxiosResponse<ApiDataTypeUser> = await axios.put(
			`${baseUrl}/edit-user/${user._id}`,
			user
		);
		return updatedUser.data;
	} catch (error) {
		throw new Error(error);
	}
};



// DELETE USER
export const deleteUser = async ( user: IUser ): Promise<ApiDataTypeUser> => {
	try {
		const updatedUser: AxiosResponse<ApiDataTypeUser> = await axios.delete(
			`${baseUrl}/delete-user/${user._id}`
		);
		return updatedUser.data;
	} catch (error) {
		throw new Error(error);
	}
};



//SEARCH MOVIES
export const searchMovies = async (query: string | null): Promise<AxiosResponse<ApiDataTypeMovies>> => {
	try {
		const movies: AxiosResponse<ApiDataTypeMovies> = await axios.get(
			baseUrl + '/search-movies/' + (query || '')
		);
		return movies;
	} catch (error) {
		throw new Error(error);
	}
};

//GET MOVIE
export const getMovie = async (type: string, id: string): Promise<AxiosResponse<ApiDataTypeMovie>> => {
	try {
		const movies: AxiosResponse<ApiDataTypeMovie> = await axios.get(
			baseUrl + '/get-movie/' + type + '/'  + id
		);
		return movies;
	} catch (error) {
		throw new Error(error);
	}
};
