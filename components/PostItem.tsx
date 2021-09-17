import React from 'react'

import Link from 'next/link'

import styles from '../styles/PostItem.module.scss'

type Props = {
  meta: PostMeta
}

const PostItem: React.FC<Props> = props => {
  return (
    <Link
      href={{
        pathname: `/blog/[slug]`,
        query: { slug: props.meta.slug },
      }}
    >
      <a>
        <li>
          <div className={`${styles.post_item} post_item`}>
            <div className="post_item_header">
              <span>{props.meta.frontmatter.date}</span>
              <span> &#8226; </span>
              <span>{props.meta.readTime} min read</span>
            </div>
            <h2>{props.meta.frontmatter.title}</h2>
            <p>{props.meta.frontmatter.description}</p>
            <div className="post_item_footer">
              {props.meta.frontmatter.tags.sort().map((tag, idx) => (
                <span key={idx}>
                  <span>{tag}</span>
                  {idx < props.meta.frontmatter.tags.length - 1 ? (
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
