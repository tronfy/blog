import React from 'react'

import { readingTime } from '../scripts/readingTime'
import styles from '../styles/PostList.module.scss'
import { Post } from '../types'

type Props = {
	posts: Post[]
}

const PostList: React.FC<Props> = props => {
	return (
		<section>
			<ul>
				{props.posts.map((post, idx) => (
					<a href="#" key={idx}>
						<li>
							<div className={styles.post_item}>
								<div className={styles.post_item_header}>
									<span>{post.frontmatter.date}</span>
									<span> &#8226; </span>
									<span>{readingTime(post)} min read</span>
								</div>
								<h3>{post.frontmatter.title}</h3>
								<p>{post.frontmatter.description}</p>
								<div className={styles.post_item_footer}>
									{post.frontmatter.tags
										.sort()
										.map((tag, idx) => (
											<span key={idx}>
												<span>{tag}</span>
												{idx <
												post.frontmatter.tags.length -
													1 ? (
													<span> &#8226; </span>
												) : (
													''
												)}
											</span>
										))}
								</div>
							</div>
						</li>
					</a>
				))}
			</ul>
		</section>
	)
}

export default PostList
