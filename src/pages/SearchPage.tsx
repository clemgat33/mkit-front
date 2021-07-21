import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '@/Layout';
import SearchBar from '@/components/SearchBar';
import MoviePreview from '@/components/MoviePreview';

import {getBodyMovie} from '@/utils/index';

import styles from '@/styles/modules/pages/SearchPage.module.scss';


import { Meta, MoviePreviewProps } from '@/interfaces';
export function getMeta(): Meta{
	return {
		title: 'Search',
		description: 'Search',
		og_title: 'Search',
		og_description: 'Search',
	};
}


export default function SearchPage(): JSX.Element {


	/*=== CONTENT ===*/
	const params = new URLSearchParams(useLocation().search);
	const searchInput = params.get('q');

	const baseUrl = 'https://api.tvmaze.com/search/shows?q=';

	const [moviesContent, setMoviesContent] = useState([]);

	useEffect(() => {
		//fetch show content
		fetch(baseUrl + searchInput)
			.then((res) => res.json())
			.then((json) => {
				// map the array returned by search API to get body of each movie
				const movies = json.map((movie: any) => {
					return getBodyMovie(movie.show);
				});
				setMoviesContent(movies);
			})
			.catch(error => console.log(error));
	}, [searchInput]);
	/*=== CONTENT ===*/



	return(
		<Layout meta={getMeta()}>
			<div className='section'>
				<h1 className='section--title'>Search</h1>
				<div className='center'>
					<SearchBar input={searchInput || ''}/>
				</div>
				<div className={styles.wrapper}>
					{
						moviesContent.length > 0 ?
							moviesContent.map((content: MoviePreviewProps, key: number) => (
								<div key={key} style={{ margin: '60px 0' }}>
									<MoviePreview content={content} isSearch={true}/>
								</div>
							))
							: (
								<div className='center'>No movie found...</div>
							)
					}
 				</div>
			</div>
		</Layout>
	);
}
