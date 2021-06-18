import React from 'react'

import { GetStaticProps } from 'next'

import Head from '../components/Head'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { getAllPosts } from '../scripts/getAllPosts'
import styles from '../styles/Home.module.scss'
import { Post } from '../types'

type Props = {
	posts: Post[]
}

const Home: React.FC<Props> = props => {
	return (
		<div className={styles.container}>
			<Head title="blog" />

			<Header />

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
