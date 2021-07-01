import React from 'react'

import PostItem from './PostItem'

type Props = {
  posts: Post[]
}

const PostList: React.FC<Props> = props => {
  return (
    <section>
      <ul>
        {props.posts.map(post => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
    </section>
  )
}

export default PostList
