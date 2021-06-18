import React from 'react'

import styles from '../styles/Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<h1>hi, i&apos;m nícolas!</h1>
			<p>
				and this is where I write about any interesting projects of mine
			</p>
		</header>
	)
}

export default Header
