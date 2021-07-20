import React from 'react';

import MovieOverview from '@/components/MovieOverview';

import styles from '@/styles/modules/components/FavoritesSection.module.scss';


export default function FavoritesSection(): React.ReactElement{

	const content = {
		title: 'Movie\'s title',
		image_url: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg'
	};

	return(
		<div className='section'>
			<h1 className='section--title'>Your Favorites</h1>
			<div className={styles.wrapper}>
				<MovieOverview content={content} />
				<MovieOverview content={content} />
				<MovieOverview content={content} />
				<MovieOverview content={content} />
				<MovieOverview content={content} />
			</div>
		</div>
	);
}
