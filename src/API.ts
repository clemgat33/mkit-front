import axios, { AxiosResponse } from 'axios';

import { ApiDataUser, IUser, ApiDataMovie, ApiDataMovies, IReview, ApiDataReview } from '@/interfaces';

const baseUrl = 'http://localhost:7000/api';

//GET USERS
export const getUsers = async (): Promise<AxiosResponse<ApiDataUser>> => {
	try {
		const users: AxiosResponse<ApiDataUser> = await axios.get(
			baseUrl + '/users'
		);
		return users;
	} catch (error) {
		throw new Error(error);
	}
};
//GET USER
export const getUser = async (user_id: string): Promise<ApiDataUser> => {
	try {
		const user: AxiosResponse<ApiDataUser> = await axios.get(
			baseUrl + '/user/' + user_id
		);
		return user.data;
	} catch (error) {
		throw new Error(error);
	}
};
// ADD USER
export const addUser = async ( body: IUser ): Promise<ApiDataUser> => {
	try {
		const user: Omit<IUser, '_id'> = body;
		const saveUser: AxiosResponse<ApiDataUser> = await axios.post(
			baseUrl + '/add-user',
			user
		);
		return saveUser.data;
	} catch (error) {
		throw new Error(error);
	}
};
// UPDATE USER
export const updateUser = async ( user: IUser ): Promise<ApiDataUser> => {
	try {
		const updatedUser: AxiosResponse<ApiDataUser> = await axios.put(
			`${baseUrl}/edit-user/${user._id}`,
			user
		);
		return updatedUser.data;
	} catch (error) {
		throw new Error(error);
	}
};
// DELETE USER
export const deleteUser = async ( user: IUser ): Promise<ApiDataUser> => {
	try {
		const updatedUser: AxiosResponse<ApiDataUser> = await axios.delete(
			`${baseUrl}/delete-user/${user._id}`
		);
		return updatedUser.data;
	} catch (error) {
		throw new Error(error);
	}
};



//SEARCH MOVIES
export const searchMovies = async (query: string | null): Promise<AxiosResponse<ApiDataMovies>> => {
	try {
		const movies: AxiosResponse<ApiDataMovies> = await axios.get(
			baseUrl + '/search-movies/' + (query || '')
		);
		return movies;
	} catch (error) {
		throw new Error(error);
	}
};
//GET MOVIE
export const getMovie = async (type: string, id: string): Promise<AxiosResponse<ApiDataMovie>> => {
	try {
		const movies: AxiosResponse<ApiDataMovie> = await axios.get(
			baseUrl + '/get-movie/' + type + '/'  + id
		);
		return movies;
	} catch (error) {
		throw new Error(error);
	}
};





//GET REVIEWS
export const getReviews = async (): Promise<AxiosResponse<ApiDataReview>> => {
	try {
		const reviews: AxiosResponse<ApiDataReview> = await axios.get(
			baseUrl + '/reviews'
		);
		return reviews;
	} catch (error) {
		throw new Error(error);
	}
};
//GET REVIEW
export const getReview = async (review_id: string): Promise<ApiDataReview> => {
	try {
		const review: AxiosResponse<ApiDataReview> = await axios.get(
			baseUrl + '/review/' + review_id
		);
		return review.data;
	} catch (error) {
		throw new Error(error);
	}
};
// ADD REVIEW
export const addReview = async ( body: IReview ): Promise<ApiDataReview> => {
	try {
		const review: Omit<IReview, '_id'> = body;
		const saveReview: AxiosResponse<ApiDataReview> = await axios.post(
			baseUrl + '/add-review',
			review
		);
		return saveReview.data;
	} catch (error) {
		throw new Error(error);
	}
};
// UPDATE REVIEW
export const updateReview = async ( review: IReview ): Promise<ApiDataReview> => {
	try {
		const updatedReview: AxiosResponse<ApiDataReview> = await axios.put(
			`${baseUrl}/edit-review/${review._id}`,
			review
		);
		return updatedReview.data;
	} catch (error) {
		throw new Error(error);
	}
};
// DELETE REVIEW
export const deleteReview = async ( review: IReview ): Promise<ApiDataReview> => {
	try {
		const updatedReview: AxiosResponse<ApiDataReview> = await axios.delete(
			`${baseUrl}/delete-review/${review._id}`
		);
		return updatedReview.data;
	} catch (error) {
		throw new Error(error);
	}
};
