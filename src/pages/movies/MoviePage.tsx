import React, {useState, useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import { useParams } from 'react-router-dom';

import {AppContext} from '@/state/context';

import Layout from '@/Layout';
import MoviePreview from '@/components/MoviePreview';

import { getMovie, addReview} from '@/API';

import styles from '@/styles/modules/pages/MoviePage.module.scss';


import { Meta, MoviePreviewProps, IReview } from '@/interfaces';
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
type FiveNumbers = 1 | 2 | 3 | 4 | 5

export default function MoviePage(): JSX.Element {

	const {state: { currentUser, reviews }, dispatch} = useContext(AppContext);


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



	/*=== ADD REVIEW ===*/
	const [rate, setRate] = useState<FiveNumbers>(3);
	const [comment, setComment] = useState<string>('');

	function handleSubmitReview(){
		if(currentUser?._id && currentUser?.username && rate){
			const newReview: IReview = {
				movie_id: movie_id,
				author_user_id: currentUser._id,
				author_username: currentUser.username,
				rate: rate,
				comment: comment
			};
			addReview(newReview)
				.then(res => {
					console.log(res);
					dispatch({
						type: 'ADD_NEW_REVIEW',
						payload: res.newReview
					});
				});
		}
		setComment('');
		setRate(3);
	}
	/*=== ADD REVIEW ===*/



	return(
		<Layout meta={getMeta()}>
			{
				content.movie_id !== undefined ? (
					<>
						<div className='section'>
							<MoviePreview content={content} />
						</div>
						{
							reviews.length > 0 && (
								<div className='section'>
									<h2>Reviews</h2>
									{reviews.map((review, key) => (
										<div key={key} className={styles.review_viewer}>
											<div><strong>Author:</strong> {review.author_username}</div>
											<div><strong>Rate:</strong> {review.rate}</div>
											<div><strong>Comment:</strong> <br/>{review.comment}</div>
										</div>
									))}
								</div>
							)
						}
						{
							currentUser && (
								<div className='section'>
									<h2>Your Review</h2>
									<div className={styles.rating}>
										<Rating
											name="simple-controlled"
											value={rate}
											onChange={(event, newRate) => {
												if(newRate === 1
												|| newRate === 2
												|| newRate === 3
												|| newRate === 4
												|| newRate === 5
												)	setRate(newRate);
											}}
										/>
									</div>
									<div className={styles.review_builder}>
										<textarea
											value={comment}
											placeholder='Your private notes and comments about the movie...'
											onChange={(e) => setComment(e.currentTarget.value)}
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
