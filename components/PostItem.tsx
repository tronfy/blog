import React from 'react'

import Link from 'next/link'

import { readingTime } from '../scripts/readingTime'
import styles from '../styles/PostItem.module.scss'

type Props = {
	post: Post
}

const PostItem: React.FC<Props> = props => {
	return (
		<Link href={{ pathname: `/posts/${props.post.slug}` }}>
			<a>
				<li>
					<div className={`${styles.post_item} post_item`}>
						<div className="post_item_header">
							<span>{props.post.frontmatter.date}</span>
							<span> &#8226; </span>
							<span>{readingTime(props.post)} min read</span>
						</div>
						<h2>{props.post.frontmatter.title}</h2>
						<p>{props.post.frontmatter.description}</p>
						<div className="post_item_footer">
							{props.post.frontmatter.tags
								.sort()
								.map((tag, idx) => (
									<span key={idx}>
										<span>{tag}</span>
										{idx <
										props.post.frontmatter.tags.length -
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
		</Link>
	)
}

export default PostItem
