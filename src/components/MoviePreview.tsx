import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {AppContext} from '@/state/context';

import no_thumbnail from '@/assets/images/no_thumbnail.png';

import styles from '@/styles/modules/components/MoviePreview.module.scss';

import { updateUser} from '@/API';

import { MoviePreviewProps } from '@/interfaces';
type PropsComponent = {
	content: MoviePreviewProps;
	isSearch?: boolean;
}

export default function MoviePreview({content, isSearch}: PropsComponent): JSX.Element{

	const {state: {currentUser}, dispatch} = useContext(AppContext);


	const genres = content.genres.map((genre, key) => {
		// add ', ' to each genre except the last one
		 if(key+1 !== content.genres.length) return genre + ', ';
		 else  return genre;
	});


	/* FAVORITES */
	const [isFavorite, setIsFavorite] = useState<boolean | null>(null);
	//when null dont show the button
	//check if there is a current user
	//then check if in is favorites

	useEffect(() => {
		if(currentUser){
			setIsFavorite(currentUser.favorites.includes(content.movie_id));
		}
	}, [currentUser, content.movie_id]);


	function addToFavorite(){
		if(currentUser){
			const newFavorites = [...currentUser.favorites,  content.movie_id];
			// send update to the api
			const user = {
				...currentUser,
				favorites: newFavorites
			};
			updateUser(user)
				.then(res => {
					console.log(res);
					return res;
				});

			//dispatch to state
			dispatch({
				type: 'ADD_FAVORITE_USER',
				payload: newFavorites
			});
		}
	}
	function removeFromFavorite(){
		if(currentUser){
			//remove the movie_id from the array of favorites
			const filterFavorites = currentUser.favorites;
			const index = filterFavorites.indexOf(content.movie_id);
			if (index > -1) {
				filterFavorites.splice(index, 1);
			}
			// send update to the api
			const user = {
				...currentUser,
				favorites: filterFavorites
			};
			updateUser(user)
				.then(res => {
					console.log(res);
					return res;
				});

			//dispatch to state
			dispatch({
				type: 'REMOVE_FAVORITE_USER',
				payload: filterFavorites
			});
		}
	}
	/* FAVORITES */



	/* ELEMENTS */
	const imageElement = isSearch ? (
		<Link to={`/movies/${content.movie_id}`} >
			<div className={`${styles.image} ${styles.image_zoom}`} >
				<img
					src={content.image_url || no_thumbnail}
					alt='image-movie'
					width={200}
					height={300}
				/>
			</div>
		</Link>
	) : (
		<div className={styles.image}>
			<img
				src={content.image_url || no_thumbnail}
				alt='image-movie'
				width={200}
				height={300}
			/>
		</div>
	);

	const year = content.date ? '(' + content.date.slice(0, 4) + ')' : '';
	const titleElement = isSearch ? (
		<Link to={`/movies/${content.movie_id}`} >
			<h1>{content.title} {year}</h1>
		</Link>
	) :  <h1>{content.title}</h1>;

	const genresTimeElements = (genres.length > 0 && content.runtime > 0) ? (
		<h5>{genres} | {content.runtime} minutes</h5>
	) : genres.length > 0  ? (
		<h5>{genres}</h5>
	) : content.runtime > 0 && (
		<h5>{content.runtime} minutes</h5>
	);


	const favoriteBtn = isFavorite !== null && (
		(isFavorite === true) ? (
			<button className='btn--secondary negatif' onClick={removeFromFavorite}>Remove From Favorites</button>
		) : (
			<button className='btn--secondary' onClick={addToFavorite}>Add To Favorites</button>
		)
	);
	/* ELEMENTS */


	return(
		<div className={styles.container}>
			{imageElement}
			<div className={styles.wrapper}>
				<div className={styles.wrapper_top}>
					{titleElement}
					{genresTimeElements}
					<div dangerouslySetInnerHTML={{ __html: content.summary}} />
					<a href={content.url} className='link' target='_blank' rel="noreferrer">Visit official site</a>
				</div>
				{favoriteBtn}
			</div>
		</div>
	);
}
