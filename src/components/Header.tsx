import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '@/state/context';

// import logo from '@/images/logo.png';
import SearchBar from '@/components/SearchBar';

import styles from '@/styles/modules/components/Header.module.scss';

import { Meta } from '@/interfaces';
interface IProps extends RouteComponentProps {
  meta: Meta;
}


function Header(props: IProps): React.ReactElement<IProps> {

	const { state: { currentUser } } = useContext(AppContext);

	const [visible, setVisible] = useState(false);
	function toggleMobileMenu(): void {
		setVisible(!visible);
	}
	const classMobileMenu = visible ? `${styles.mobile_menu} ${styles.show}` : `${styles.mobile_menu} ${styles.hide}`;


	return (
		<header>
			<Helmet>
				<title>{props.meta.title}</title>
				<meta name='description' content={props.meta.description} />
				<meta property="og:type" content="website" />
				<meta name='og:title' content={props.meta.og_title} />
				<meta property="og:description" content={props.meta.og_description} />
				{
					//<meta property="og:image" content={props.meta.og_image || '%PUBLIC_URL%/og_image.jpg'} />
				}
			</Helmet>
			<nav className={styles.navbar}>
				<div className={styles.menu_container} >
					<Link to='/' className='logo'>
						{
							// <img
							// 	alt='logo'
							// 	src={logo}
							// 	width='200'
							//  	/>
						}
            My Movie Collection
					 </Link>

					<div className={styles.large_menu_area}>
						<div className={styles.menu_element}>{currentUser ?.username}</div>
						<div className={styles.menu_element}>
							<Link to='/account' className='link'>Account</Link>
						</div>
						<SearchBar />
					</div>

					<div className={styles.btn_menubar} onClick={toggleMobileMenu}>
						<FontAwesomeIcon icon={faBars} width={20} height={20} />
					</div>

				</div>

				<div className={classMobileMenu}>
					<div className={styles.menu_element}>{currentUser ?.username}</div>
					<div className={styles.menu_element}>
						<Link to='/account' className='link'>Account</Link>
					</div>
					<SearchBar toggleMobileMenu={toggleMobileMenu} />
				</div>
			</nav>
		</header>
	);

}

export default withRouter(Header);
