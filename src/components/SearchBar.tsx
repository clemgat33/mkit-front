import React, {useState} from 'react';

import styles from '@/styles/modules/components/SearchBar.module.scss';

type Props = {
  toggleMobileMenu?: (() => void) | undefined  ;
}

export default function SearchBar({toggleMobileMenu}: Props): React.ReactElement{

	const [searchInput, setSearchInput] = useState('');

	function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault();

		if(searchInput.length > 0){
			//close menu on mobile
			toggleMobileMenu && toggleMobileMenu();
			console.log(searchInput);
		}
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
