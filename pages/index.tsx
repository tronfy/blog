import { GetStaticProps } from 'next'
import React from 'react'
import Head from '../components/Head'
import styles from '../styles/Home.module.scss'
import { getAllPosts } from '../scripts/getAllPosts'
import { readingTime } from '../scripts/readingTime'
import { Post } from '../types'

type Props = {
	posts: Post[]
}

const Home: React.FC<Props> = props => {
	return (
		<div className={styles.container}>
			<Head title="blog" />

			<header className={styles.header}>
				<h1>hi, i&apos;m nícolas!</h1>
				<p>
					and this is where I write about any interesting projects of
					mine
				</p>
			</header>

			<main className={styles.main}>
				<section>
					<ul>
						{props.posts.map((post, idx) => (
							<a href="#" key={idx}>
								<li>
									<div className={styles.post_item}>
										<div
											className={styles.post_item_header}
										>
											<span>{post.frontmatter.date}</span>
											<span> &#8226; </span>
											<span>
												{readingTime(post)} min read
											</span>
										</div>
										<h3>{post.frontmatter.title}</h3>
										<p>{post.frontmatter.description}</p>
										<div
											className={styles.post_item_footer}
										>
											{post.frontmatter.tags
												.sort()
												.map((tag, idx) => (
													<>
														<span key={idx}>
															{tag}
														</span>
														{idx <
														post.frontmatter.tags
															.length -
															1 ? (
															<span>
																{' '}
																&#8226;{' '}
															</span>
														) : (
															''
														)}
													</>
												))}
										</div>
									</div>
								</li>
							</a>
						))}
					</ul>
				</section>
			</main>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts()

	return {
		props: {
			posts,
		},
	}
}

export default Home
