import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@/styles/modules/components/MovieOverview.module.scss';

import { MovieOverviewProps } from '@/interfaces';


export default function MovieOverview({title, image_url}: MovieOverviewProps): JSX.Element{

	return(
		<Link to='/' >
			<div className={styles.container}>
				<img
					src={image_url}
					alt='image-movie'
					width={200}
					height={300}
				/>
				<div className={styles.title}>{title}</div>
			</div>
		</Link>
	);
}
