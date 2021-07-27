import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@/styles/modules/components/MovieOverview.module.scss';

import { MovieOverviewProps } from '@/interfaces';
type PropsComponent = {
  content: MovieOverviewProps
}

export default function MovieOverview({ content }: PropsComponent): JSX.Element {

	return (
		<div className={styles.container}>
			<Link to={`/movies/${content.movie_id}`} >
				<img
					src={content.image_url}
					alt='image-movie'
					width={200}
					height={300}
				/>
				<div className={styles.title}>{content.title}</div>
			</Link>
		</div>
	);
}
