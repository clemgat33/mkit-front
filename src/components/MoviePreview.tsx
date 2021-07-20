import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@/styles/modules/components/MoviePreview.module.scss';

import { MoviePreviewProps } from '@/interfaces';
type PropsComponent = {
	content: MoviePreviewProps
}

export default function MoviePreview({content}: PropsComponent): JSX.Element{

	const genres = content.genres.map((genre, key) => {
		// add ', ' to each genre except the last one
		 if(key+1 !== content.genres.length) return genre + ', ';
		 else  return genre;
	});

	function handleFavorite(){
		console.log('FAVORITE',content);
	}

	return(
		<div className={styles.container}>
			<Link to='/' >
				<div className={styles.image}>
					<img
						src={content.image_url}
						alt='image-movie'
						width={200}
						height={300}
					/>

				</div>
			</Link>
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
