import React from 'react'

import PostItem from './PostItem'

type Props = {
  metas: PostMeta[]
}

const PostList: React.FC<Props> = props => {
  let render

  if (props.metas.length > 0) {
    render = props.metas.map(meta => <PostItem meta={meta} key={meta.slug} />)
  } else render = <p>Hmm, parece que ainda não tem nada aqui.</p>

  return (
    <section>
      <ul>{render}</ul>
    </section>
  )
}

export default PostList
