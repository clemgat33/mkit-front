import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '@/state/context';

import Layout from '@/Layout';

import { addUser, deleteUser } from '@/API';

import { Meta, IUser } from '@/interfaces';
export function getMeta(): Meta{
	return {
		title: 'Account',
		description: 'Account',
		og_title: 'Account',
		og_description: 'Account',
	};
}
import {setLocalStorage,} from '@/utils/index';

import styles from '@/styles/modules/pages/AccountPage.module.scss';

export default function Account(): JSX.Element {

	const {state: {users, currentUser}, dispatch} = useContext(AppContext);



	/* FAVORITES */
	const getFavorites = (favorites: number[]) => {
		return favorites.map((fav_id, key) => (
			<span key={key}><Link to={`/movies/${fav_id}`} className='link'>{fav_id}</Link>{(key !== favorites.length - 1) ? ' / ' : '' }</span>
		));
	};
	/* FAVORITES */


	/* ADD USER */
	const [inputUser, setInputUser] = useState('');

	function createUser(){
		const newUser: IUser = {
			username: inputUser,
			favorites: []
		};
		addUser(newUser)
			.then(res => 	{
				console.log(res);
				//const newUserFull = res.users.find((value) => value.username === newUser.username );
				dispatch({
					type: 'ADD_NEW_USER',
					payload: res.newUser
				});
				dispatch({
					type: 'LOGIN_USER',
					payload: res.newUser
				});
				setLocalStorage('user_id', res.newUser?._id);
			});
		setInputUser('');
	}
	/* ADD USER */



	/* DELETE USER */
	function deleteCurrentUser(){
		if(currentUser)	{
			if (confirm(`Are you sure you want to delete ${currentUser.username}`)) {
				const userToDelete = users.find((user) => user.username === currentUser.username);
				if(userToDelete){
					deleteUser(userToDelete)
						.then(res => {
							console.log(res);
							dispatch({
								type: 'DELETE_USER',
								payload: res.deletedUser
							});
							dispatch({
								type: 'LOGOUT_USER'
							});
							localStorage.removeItem('user_id');
						});
				}
			}
		}
	}
	/* DELETE USER */


	/* LOGIN */
	function login(user: IUser){
		if (confirm(`Are you sure you want to login with ${user.username}`)) {
			// LOGIN IN
			dispatch({
				type: 'LOGIN_USER',
				payload: user
			});
		}
	}
	/* LOGIN */


	/* LOGOUT */
	function logout(){
		dispatch({
			type: 'LOGOUT_USER'
		});
		localStorage.removeItem('user_id');
	}
	/* LOGOUT */


	return (
    	<Layout meta={getMeta()}>
			<div className='section'>
				<h2>Current User</h2>
				{//adding loading here
					currentUser ? (
						<div className={styles.container}>
							<h4>{currentUser.username}</h4>
							<div style={{marginBottom: 40}}>Favorites: {getFavorites(currentUser.favorites)}</div>
							<button className='btn--secondary negatif' onClick={logout}>Logout</button>
							<button className='negatif' onClick={deleteCurrentUser}>Delete User</button>
						</div>
					) : (
						<div className={styles.container}>
							<div>No user connected, please click on a username or add a user</div>
							<form onSubmit={(e:React.FormEvent) => {e.preventDefault();createUser();}}>
								<input type='text' value={inputUser} placeholder='Username' onChange={(e) => setInputUser(e.currentTarget.value)}/>
								<button type='submit'>Create user</button>
							</form>
						</div>
					)
				}
			</div>
			<div className='section'>
				<h2>Users</h2>
				{
					users.length > 0 ? (
						users.filter(user => user.username !== currentUser?.username).map((user, key) => (
							<div key={key} className={styles.container}>
								<div>Username:  <span className='link' onClick={() => login(user)}>{user.username}</span></div>
								<div>Favorites: {getFavorites(user.favorites)}</div>
							</div>
						))
					) : (
						<div>There is no users</div>
					)
				}
			</div>
		</Layout>
	);
}
