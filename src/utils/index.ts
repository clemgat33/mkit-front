import { MoviePreviewProps, MovieOverviewProps, IUser } from '@/interfaces';

export function getBodyMovie(data: any): MoviePreviewProps{ // eslint-disable-line

	const body  = {
		movie_id: data.id,
		title: data.name,
		image_url: data.image?.medium,
		date: data.premiered,
		genres: data.genres,
		runtime: data.runtime,
		summary: data.summary,
		url: data.url,
	};

	return body;
}



export function getFavBodyMovie(data: any): MovieOverviewProps{ // eslint-disable-line

	const body  = {
		movie_id: data.id,
		title: data.name,
		image_url: data.image?.medium,
	};

	return body;
}


//LOCAL STORAGE TO PERSIST

export function setLocalStorage(key: string, value: string | null | undefined ): void {
	try {
		 if(value) window.localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		// catch possible errors:
		// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
	}
}

export function getLocalStorage(key: string, initialValue: string | null): string | null {
	try {
		const value = window.localStorage.getItem(key);
		return value ? JSON.parse(value) : initialValue;
	} catch (e) {
		// if error, return initial value
		return null;
	}
}
