import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from '@/state/context';

import MovieOverview from '@/components/MovieOverview';

import { getMovie} from '@/API';

import {MovieOverviewProps} from '@/utils/interfaces';

import styles from '@/styles/modules/components/FavoritesSection.module.scss';




export default function FavoritesSection(): React.ReactElement{

	const [favoritesContent, setFavoritesContent] = useState<MovieOverviewProps[]>([]);

	const {state: {currentUser}} = useContext(AppContext);

	useEffect(() => {
		//refresh before fetching
		setFavoritesContent([]);
		currentUser?.favorites.map((fav_id: number) => {
			getMovie('overview', fav_id.toString())
				.then(res => {
					return res.data.movie;
				})
				.then((movie: MovieOverviewProps) => 	{
					if(movie.title !== 'Not Found'){
						setFavoritesContent(prevFav => [...prevFav, movie]);}
				}
				);
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
