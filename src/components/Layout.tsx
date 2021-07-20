import * as React from 'react';

import Header from './Header';
import { Meta } from '@/interfaces';

import styles from '@/styles/modules/components/Layout.module.scss';

interface Props {
    children: React.ReactNode,
    meta: Meta
}

function Layout({children, meta}: Props): React.ReactElement<Props>{

	return(
		<>
			<Header meta={meta}/>
			<div className={styles.container}>
				<main>
					{children}
				</main>
			</div>
		</>
	);
}

export default Layout;
