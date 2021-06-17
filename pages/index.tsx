import { GetStaticProps } from 'next'
import React from 'react'
import Head from '../components/Head'
import styles from '../styles/Home.module.scss'
import { getAllPosts } from '../scripts/getAllPosts'
import { Post } from '../types'
import PostList from '../components/PostList'

type Props = {
	posts: Post[]
}

const Home: React.FC<Props> = props => {
	return (
		<div className={styles.container}>
			<Head title="blog" />

			<header className={styles.header}>
				<h1>hi, i&apos;m nícolas!</h1>
				<p>
					and this is where I write about any interesting projects of
					mine
				</p>
			</header>

			<main className={styles.main}>
				<PostList posts={props.posts} />
			</main>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts()

	return {
		props: {
			posts,
		},
	}
}

export default Home
