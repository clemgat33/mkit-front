import React from 'react';

import Layout from '@/Layout';

import styles from '@/styles/modules/pages/HomePage.module.scss';


import { Meta } from '@/interfaces';
export function getMeta(): Meta{
	return {
		title: 'Home',
		description: 'Home',
		og_title: 'Home',
		og_description: 'Home',
	};
}


export default function Home(): JSX.Element {


	return(
		<Layout meta={getMeta()}>
			Home page
		</Layout>
	);
}
