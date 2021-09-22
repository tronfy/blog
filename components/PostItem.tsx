import React from 'react'

import Link from 'next/link'

import styles from '../styles/PostItem.module.scss'
import MetaData from './MetaData'
import MetaTags from './MetaTags'

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
      <a className={`${styles.a} nostyle`}>
        <li>
          <div className={styles.post_item}>
            <div className={styles.info}>
              <MetaData
                date={props.meta.frontmatter.date}
                readTime={props.meta.readTime}
              />
            </div>
            <h2>{props.meta.frontmatter.title}</h2>
            <p>{props.meta.frontmatter.description}</p>
            <div className={styles.info}>
              <MetaTags tags={props.meta.frontmatter.tags} />
            </div>
          </div>
        </li>
      </a>
    </Link>
  )
}

export default PostItem
