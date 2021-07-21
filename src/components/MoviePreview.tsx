import React from 'react';
import { Link } from 'react-router-dom';

import no_thumbnail from '@/assets/images/no_thumbnail.png';

import styles from '@/styles/modules/components/MoviePreview.module.scss';

import { MoviePreviewProps } from '@/interfaces';
type PropsComponent = {
	content: MoviePreviewProps;
	isSearch?: boolean;
}

export default function MoviePreview({content, isSearch}: PropsComponent): JSX.Element{

	const genres = content.genres.map((genre, key) => {
		// add ', ' to each genre except the last one
		 if(key+1 !== content.genres.length) return genre + ', ';
		 else  return genre;
	});

	function handleFavorite(){
		console.log('FAVORITE',content);
	}


	/* ELEMENTS */
	const imageElement = isSearch ? (
		<Link to={`/movies/${content.movie_id}`} >
			<div className={`${styles.image} ${styles.image_zoom}`} >
				<img
					src={content.image_url || no_thumbnail}
					alt='image-movie'
					width={200}
					height={300}
				/>
			</div>
		</Link>
	) : (
		<div className={styles.image}>
			<img
				src={content.image_url || no_thumbnail}
				alt='image-movie'
				width={200}
				height={300}
			/>
		</div>
	);

	const year = content.date ? '(' + content.date.slice(0, 4) + ')' : '';
	const titleElement = isSearch ? (
		<Link to={`/movies/${content.movie_id}`} >
			<h1>{content.title} {year}</h1>
		</Link>
	) :  <h1>{content.title}</h1>;

	const genresTimeElements = (genres.length > 0 && content.runtime > 0) ? (
		<h5>{genres} | {content.runtime} minutes</h5>
	) : genres.length > 0  ? (
		<h5>{genres}</h5>
	) : content.runtime > 0 && (
		<h5>{content.runtime} minutes</h5>
	);
	/* ELEMENTS */

	return(
		<div className={styles.container}>
			{imageElement}
			<div className={styles.wrapper}>
				<div className={styles.wrapper_top}>
					{titleElement}
					{genresTimeElements}
					<div dangerouslySetInnerHTML={{ __html: content.summary}} />
					<a href={content.url} className='link' target='_blank' rel="noreferrer">Visit official site</a>
				</div>
				<button className='btn--secondary' onClick={handleFavorite}>Add To Favorites</button>
			</div>
		</div>
	);
}
