import matter from 'gray-matter'

import { readingTime } from '../scripts/readingTime'
import slugify from './slugify'

type PostValue = {
  default: string
}

export const getAllPosts = (locale: string, defaultLocale: string): Post[] => {
  let context
  if (locale !== defaultLocale)
    context = require.context(`../posts/pt-BR`, false, /\.md$/)
  else context = require.context(`../posts`, false, /\.md$/)

  const keys = context.keys()
  const values: PostValue[] = keys.map(context) as PostValue[]

  const data = keys.map((key, idx): Post => {
    const slug = slugify(key)

    const value = values[idx]
    const document = matter(value.default)

    const readTime = readingTime(value.default)

    return {
      frontmatter: document.data as Frontmatter,
      markdown: document.content,
      slug: slug,
      readTime: readTime,
    }
  })

  data.sort((a: Post, b: Post): number => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()

    return dateB - dateA
  })

  return data
}
