import React from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import TextBob from '../components/TextBob'

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>🦊💻</title>
			</Head>

			<main className={styles.main}>
				<h1 className={`${styles.title} ${styles.motion_text}`}>
					<TextBob text="Soon!" maxBob={5} />
				</h1>

				<h3 className={styles.description}>
					<a href="https://github.com/nicolasdschmidt">
						github.com/nicolasdschmidt
					</a>
					<p>🦊💻</p>
				</h3>
			</main>
		</div>
	)
}

export default Home
