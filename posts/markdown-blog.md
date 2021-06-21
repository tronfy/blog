---
title: 'Next.js Markdown Blog'
description: 'This blog you are looking at right now? Let me tell you how I made it.'
date: '2020-03-16'
tags: ['blog', 'next.js', 'markdown', 'web', 'typescript']
---

**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Quisque dictum sapien non odio fermentum elementum. Maecenas maximus laoreet luctus.

- item 1
- item 2

1. a
2. b

Donec hendrerit felis at libero pretium auctor. Fusce malesuada elementum libero, vitae vehicula dui congue at.

```tsx
// index.d.ts
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
```

Aenean tempor suscipit sapien et condimentum. Aliquam porta porttitor ullamcorper. **Etiam at suscipit arcu.** Fusce nec dictum felis. Ut accumsan nisl nec ex volutpat luctus.

![Cat](/cat.jpg)

## Lorem Ipsum

Integer aliquam eu nunc dignissim tempor. *Aliquam pretium sollicitudin dolor, in rhoncus metus laoreet ac.* Duis vel mi est.

> All the world’s a stage, And all the men and women merely players;

Mauris accumsan finibus ipsum non consectetur. Nullam porttitor ipsum mauris, suscipit fringilla massa egestas quis. [Etiam in urna in tellus aliquet molestie](). Nunc scelerisque dapibus lectus, vel dapibus mi tempus ac. Praesent eros dolor, faucibus nec pretium id, fermentum et mi.
