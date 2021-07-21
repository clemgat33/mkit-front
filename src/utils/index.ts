import { MoviePreviewProps } from '@/interfaces';

export function getBodyMovie(data: any): MoviePreviewProps{

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
