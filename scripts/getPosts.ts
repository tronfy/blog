import matter from 'gray-matter'

import slugify from './slugify'

type PostValue = {
  default: string
}

const readingTime = (text: string): number => {
  const wpm = 160
  const words = text
    .replace(/(?:^#+\s|\*|^-)/gm, '')
    .trim()
    .split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

export const getAllPostMetas = (): PostMeta[] => {
  const context = require.context('../posts', false, /\.md$/)
  const keys = context.keys()
  const values: PostValue[] = keys.map(context) as PostValue[]

  const data = keys.map((key, idx): PostMeta => {
    const slug = slugify(key)

    const value = values[idx]
    const document = matter(value.default.match(/(^---).*(^---)/gms).join(''))
    const readTime = readingTime(value.default)

    return {
      frontmatter: document.data as Frontmatter,
      slug: slug,
      readTime: readTime,
    }
  })

  data.sort((a: PostMeta, b: PostMeta): number => {
    const dateA = new Date(a.frontmatter.date).getTime()
    const dateB = new Date(b.frontmatter.date).getTime()

    return dateB - dateA
  })

  return data
}

export const getPost = (slug: string): Post => {
  const context = require.context('../posts', false, /\.md$/)
  const keys = context.keys()
  const values: PostValue[] = keys.map(context) as PostValue[]

  const idx = keys.findIndex(key => {
    return slug === slugify(key)
  })

  const value = values[idx]
  const document = matter(value.default)
  const readTime = readingTime(value.default)

  return {
    meta: {
      frontmatter: document.data as Frontmatter,
      slug: slug,
      readTime: readTime,
    },
    body: document.content,
  }
}
