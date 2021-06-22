import React from 'react'

import glob from 'glob'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import {
	NormalComponents,
	SpecialComponents,
} from 'react-markdown/src/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import Head from '../../components/Head'
import Header from '../../components/Header'
import styles from '../../styles/PostPage.module.scss'
import prismTheme from '../../styles/prism-custom'

type Props = {
	post: Post
}

const PostPage: React.FC<Props> = props => {
	const components: Partial<NormalComponents & SpecialComponents> = {
		code({ inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline && match ? (
				<SyntaxHighlighter
					style={prismTheme}
					language={match[1]}
					PreTag="div"
					{...props}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			)
		},
	}

	return (
		<div className="container">
			<Head title={props.post.frontmatter.title} />

			<Header
				title={props.post.frontmatter.title}
				subtitle={props.post.frontmatter.description}
			/>

			<div className={styles.markdown}>
				<ReactMarkdown components={components}>
					{props.post.markdown}
				</ReactMarkdown>
			</div>
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
	const paths = blogSlugs.map(slug => `/posts/${slug}`)
	return {
		paths,
		fallback: false,
	}
}

export default PostPage
