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

	type PostValue = {
		default: string
	}
}

export {}
