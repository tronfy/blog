import React from 'react'

import PostItem from './PostItem'

type Props = {
  metas: PostMeta[]
}

const PostList: React.FC<Props> = props => {
  return (
    <section>
      <ul>
        {props.metas.map(meta => (
          <PostItem meta={meta} key={meta.slug} />
        ))}
      </ul>
    </section>
  )
}

export default PostList
