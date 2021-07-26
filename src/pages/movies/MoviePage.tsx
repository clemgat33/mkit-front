import React, {useState, useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import { useParams } from 'react-router-dom';

import {AppContext} from '@/state/context';

import Layout from '@/Layout';
import MoviePreview from '@/components/MoviePreview';

import { getMovie} from '@/API';

import styles from '@/styles/modules/pages/MoviePage.module.scss';


import { Meta, MoviePreviewProps } from '@/interfaces';
export function getMeta(): Meta{
	return {
		title: 'Movie',
		description: 'Movie',
		og_title: 'Movie',
		og_description: 'Movie',
	};
}
type Params = {
	movie_id: string
}


export default function MoviePage(): JSX.Element {

	const {state: { currentUser }} = useContext(AppContext);


	/*=== CONTENT ===*/
	const {movie_id} = useParams<Params>();

	const [content, setContent] = useState<MoviePreviewProps>({
		movie_id: 0,
		title: '',
		image_url: '',
		date: '',
		genres: [],
		runtime: 0,
		summary: '',
		url: '',
	});

	useEffect(() => {
		//fetch show content
		getMovie('preview', movie_id)
			.then(res => {
				return res.data.movie;
			})
			.then(movie => setContent(movie));
	}, [movie_id]);
	/*=== CONTENT ===*/



	/*=== REVIEW ===*/
	const [value, setValue] = useState<number|null>(3);
	const [message, setMessage] = useState<string>('');

	function handleSubmitReview(){
		console.log(value, message);
		setValue(3);
		setMessage('');
	}
	/*=== REVIEW ===*/



	return(
		<Layout meta={getMeta()}>
			{
				content.movie_id !== undefined ? (
					<>
						<div className='section'>
							<MoviePreview content={content} />
						</div>
						{
							currentUser && (
								<div className='section'>
									<h2>Your Review</h2>
									<div className={styles.rating}>
										<Rating
											name="simple-controlled"
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										/>
									</div>
									<div className={styles.review}>
										<textarea
											value={message}
											placeholder='Your private notes and comments about the movie...'
											onChange={(e) => setMessage(e.currentTarget.value)}
										/>
									</div>
									<div className='btn' onClick={handleSubmitReview}>Submit</div>
								</div>
							)
						}
					</>
				) : (
					<div className='section'>
						<h1>Movie not found</h1>
						<button>
							<Link to='/search'>Search again</Link>
						</button>
					</div>
				)
			}

		</Layout>
	);
}
