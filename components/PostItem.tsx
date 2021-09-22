import React from 'react'

import Link from 'next/link'

import simpleDate from '../scripts/simpleDate'
import styles from '../styles/PostItem.module.scss'

type Props = {
  meta: PostMeta
}

const PostItem: React.FC<Props> = props => {
  const date = simpleDate(new Date(props.meta.frontmatter.date))
  return (
    <Link
      href={{
        pathname: `/blog/[slug]`,
        query: { slug: props.meta.slug },
      }}
    >
      <a className={`${styles.a} nostyle`}>
        <li>
          <div className={`${styles.post_item} post_item`}>
            <div className="post_item_header">
              <span>{date}</span>
              <span>{' • '}</span>
              <span>leitura de {props.meta.readTime}min</span>
            </div>
            <h2>{props.meta.frontmatter.title}</h2>
            <p>{props.meta.frontmatter.description}</p>
            <div className="post_item_footer">
              {props.meta.frontmatter.tags.sort().map((tag, idx) => (
                <span key={idx}>
                  <span>{tag}</span>
                  {idx < props.meta.frontmatter.tags.length - 1 ? (
                    <span>{' • '}</span>
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
