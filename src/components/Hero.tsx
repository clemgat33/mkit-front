import React from 'react';
import { Link } from 'react-router-dom';

import styles from '@/styles/modules/components/Hero.module.scss';


export default function Hero(): React.ReactElement{


	return(
		<div className={styles.container}  >
			<div className={styles.wrapper} >
				<h1>Heading</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<Link to='/search'>
					<button>Search</button>
				</Link>
			</div>
		</div>
	);
}
