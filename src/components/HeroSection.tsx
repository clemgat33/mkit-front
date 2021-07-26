import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@/styles/modules/components/HeroSection.module.scss';


export default function HeroSection(): React.ReactElement{


	return(
		<div className={styles.container}  >
			<div className={styles.wrapper} >
				<h1>Welcome</h1>
				<p>Search your gem. Make list of your favorites movies. Note and let a review for the movies you watched.</p>
				<Link to='/search'>
					<button>Search</button>
				</Link>
			</div>
		</div>
	);
}
