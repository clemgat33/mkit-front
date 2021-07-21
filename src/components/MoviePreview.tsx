import React from 'react';
import { Link } from 'react-router-dom';

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

	const imageElement = (

		<img
			src={content.image_url}
			alt='image-movie'
			width={200}
			height={300}
		/>
	);

	return(
		<div className={styles.container}>
			{
				isSearch ? (
					<Link to={`/movies/${content.movie_id}`} >
						<div className={`${styles.image} ${styles.image_zoom}`} >
							{imageElement}
						</div>
					</Link>
				) :(
					<div className={styles.image}>
						{imageElement}
					</div>
				)
			}
			<div className={styles.wrapper}>
				<div className={styles.wrapper_top}>
					<h1>{content.title}</h1>
					<h5>{genres} | {content.runtime} minutes</h5>
					<div dangerouslySetInnerHTML={{ __html: content.summary}} />
					<a href={content.url} className='link' target='_blank' rel="noreferrer">Visit official site</a>
				</div>
				<button className='btn--secondary' onClick={handleFavorite}>Add To Favorites</button>
			</div>
		</div>
	);
}
