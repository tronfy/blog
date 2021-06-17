export type Frontmatter = {
	[key: string]: any
}

export type Post = {
	frontmatter: Frontmatter
	markdown: string
	slug: string
}
