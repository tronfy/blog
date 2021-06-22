export const readingTime = (text: string): number => {
	const wpm = 160
	const words = text
		.replace(/(?:^#+\s|\*|^-)/gm, '')
		.trim()
		.split(/\s+/).length
	const time = Math.ceil(words / wpm)
	return time
}
