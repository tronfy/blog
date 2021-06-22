import React from 'react'

import { GetStaticProps } from 'next'

import Head from '../components/Head'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { getAllPosts } from '../scripts/getAllPosts'

type Props = {
	posts: Post[]
}

const Home: React.FC<Props> = props => {
	return (
		<>
			<Head title="Home" />

			<Header
				title="Hi, I'm Nícolas!"
				subtitle="And this is where I write about any interesting projects of mine."
			/>

			<PostList posts={props.posts} />
		</>
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
