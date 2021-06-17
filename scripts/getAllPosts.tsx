import matter from 'gray-matter'
import { Post } from '../types'

export const getAllPosts = (): Post[] => {
	const context = require.context('../posts', false, /\.md$/)
	const keys = context.keys()
	const values = keys.map(context)

	const data = keys.map((key, idx): Post => {
		const slug = key
			.replace(/^.*[\\/]/, '')
			.split('.')
			.slice(0, -1)
			.join('.')

		const value: any = values[idx]
		const document = matter(value.default)

		return {
			frontmatter: document.data,
			markdown: document.content,
			slug,
		}
	})

	data.sort((a: Post, b: Post): number => {
		const dateA = new Date(a.frontmatter.date).getTime()
		const dateB = new Date(b.frontmatter.date).getTime()

		return dateB - dateA
	})

	return data
}
