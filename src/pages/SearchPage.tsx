import React from 'react';

import Layout from '@/Layout';
import SearchBar from '@/components/SearchBar';
import MoviePreview from '@/components/MoviePreview';

import styles from '@/styles/modules/pages/SearchPage.module.scss';


import { Meta } from '@/interfaces';
export function getMeta(): Meta{
	return {
		title: 'Search',
		description: 'Search',
		og_title: 'Search',
		og_description: 'Search',
	};
}


export default function SearchPage(): JSX.Element {

	const content = {
		movie_id: 1,
		title: 'Under the Dome',
		image_url: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
		date:  '2013-06-24',
		genres: [
			'Drama',
			'Science-Fiction',
			'Thriller'
		],
		runtime: 60,
		summary: '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town\'s inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>',
		url: 'https://www.tvmaze.com/shows/1/under-the-dome'
	};

	return(
		<Layout meta={getMeta()}>
			<div className='section'>
				<h1 className='section--title'>Search</h1>
				<div className='center'>
					<SearchBar />
				</div>
				<div className={styles.wrapper}>
					<div style={{ margin: '60px 0' }}>
						<MoviePreview content={content} isSearch={true}/>
					</div>
					<div style={{ margin: '60px 0' }}>
						<MoviePreview content={content} isSearch={true}/>
					</div>
					<div style={{ margin: '60px 0' }}>
						<MoviePreview content={content} isSearch={true}/>
					</div>
 				</div>
			</div>
		</Layout>
	);
}
