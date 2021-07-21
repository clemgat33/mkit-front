import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


import styles from '@/styles/modules/components/SearchBar.module.scss';

type Props = {
  toggleMobileMenu?: (() => void) | undefined;
  input?: string | undefined;
}

export default function SearchBar({toggleMobileMenu, input}: Props): React.ReactElement{
	const history = useHistory();

	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		input !== undefined && setSearchInput(input);
	}, [input]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault();
		//close menu on mobile
		toggleMobileMenu && toggleMobileMenu();
		//redirect with query
		searchInput.length > 0 ? history.push(`/search?q=${searchInput}`) : history.push('/search');
	}

	return(
		<form className={styles.container} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder='Search by movie title...'
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
			<button  type="submit" className='btn--secondary'>Search</button>
		</form>
	);
}
