declare global {
	type Frontmatter = {
		title: string
		description: string
		date: string
		tags: string[]
	}

	type Post = {
		frontmatter: Frontmatter
		markdown: string
		slug: string
	}
}

export {}
