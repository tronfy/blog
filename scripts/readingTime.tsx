export const readingTime = (post: Post): number => {
	const txt = post.markdown
	const wpm = 160
	const words = txt
		.replace(/(?:^#+\s|\*|^-)/gm, '')
		.trim()
		.split(/\s+/).length
	const time = Math.ceil(words / wpm)
	return time
}
