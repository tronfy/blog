import React from 'react'

import { readingTime } from '../scripts/readingTime'
import styles from '../styles/PostItem.module.scss'

type Props = {
	post: Post
}

const PostItem: React.FC<Props> = props => {
	return (
		<a href="#">
			<li>
				<div className={styles.post_item}>
					<div className={styles.post_item_header}>
						<span>{props.post.frontmatter.date}</span>
						<span> &#8226; </span>
						<span>{readingTime(props.post)} min read</span>
					</div>
					<h3>{props.post.frontmatter.title}</h3>
					<p>{props.post.frontmatter.description}</p>
					<div className={styles.post_item_footer}>
						{props.post.frontmatter.tags.sort().map((tag, idx) => (
							<span key={idx}>
								<span>{tag}</span>
								{idx <
								props.post.frontmatter.tags.length - 1 ? (
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
	)
}

export default PostItem
