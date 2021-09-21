declare global {
  interface Frontmatter {
    title: string
    description: string
    date: string
    tags: string[]
  }

  interface PostMeta {
    frontmatter: Frontmatter
    slug: string
    readTime: number
  }

  interface Post {
    meta: PostMeta
    body: string
  }
}

export {}
