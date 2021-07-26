import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '@/state/context';

import MovieOverview from '@/components/MovieOverview';

import {getFavBodyMovie} from '@/utils/index';
import {MovieOverviewProps} from '@/utils/interfaces';

import styles from '@/styles/modules/components/FavoritesSection.module.scss';




export default function FavoritesSection(): React.ReactElement{

	const [favoritesContent, setFavoritesContent] = useState<MovieOverviewProps[]>([]);

	const {state: {currentUser}} = useContext(AppContext);

	const baseUrl = 'https://api.tvmaze.com/shows/';

	useEffect(() => {
		//refresh before fetching
		setFavoritesContent([]);
		currentUser?.favorites.map((fav_id: number) => {
			fetch(baseUrl + fav_id)
				.then((res) => res.json())
				.then((json) => getFavBodyMovie(json))
				.then(fav => {
					if(fav.title !== 'Not Found'){
						setFavoritesContent(prevFav => [...prevFav, fav]);
					}
				})
				.catch(error => console.log(error));
		});
	}, [currentUser]);


	return(
		<div className='section'>
			<h1 className='section--title'>Your Favorites</h1>
			<div className={styles.wrapper}>
				{
					favoritesContent.map((favContent: MovieOverviewProps, key: number) => (
						<MovieOverview key={key} content={favContent} />
					))
				}
			</div>
		</div>
	);
}
