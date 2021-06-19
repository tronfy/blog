import React from 'react'

import glob from 'glob'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'

import Head from '../../components/Head'

type Props = {
	post: Post
}

const PostPage: React.FC<Props> = props => {
	return (
		<div>
			<Head title={props.post.frontmatter.title} />

			<main></main>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async ctx => {
	const { slug } = ctx.params
	const postFile = await import(`../../posts/${slug}.md`)
	const grayMatter = matter(postFile.default)

	return {
		props: {
			post: {
				frontmatter: grayMatter.data,
				markdown: grayMatter.content,
				slug: slug,
			},
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	// get all .md files in the posts dir
	const blogs = glob.sync('posts/**/*.md')

	// remove path and extension to leave filename only
	const blogSlugs = blogs.map(file =>
		file.split('/')[1].replace(/ /g, '-').slice(0, -3).trim()
	)

	// create paths with `slug` param
	const paths = blogSlugs.map(slug => `/post/${slug}`)
	return {
		paths,
		fallback: false,
	}
}

export default PostPage
