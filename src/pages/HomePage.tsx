import React, {useContext} from 'react';

import {AppContext} from '@/state/context';

import Layout from '@/Layout';
import HeroSection from '@/components/HeroSection';
import FavoritesSection from '@/components/FavoritesSection';

//import styles from '@/styles/modules/pages/HomePage.module.scss';


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
	const {state: { currentUser }} = useContext(AppContext);

	return(
		<Layout meta={getMeta()}>
			<HeroSection />
			{currentUser && (
				<FavoritesSection />
			)}
		</Layout>
	);
}
