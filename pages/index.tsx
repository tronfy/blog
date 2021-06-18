import { GetStaticProps } from 'next'
import React from 'react'
import Head from '../components/Head'
import styles from '../styles/Home.module.scss'
import { getAllPosts } from '../scripts/getAllPosts'
import { Post } from '../types'
import PostList from '../components/PostList'
import Header from '../components/Header'

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
