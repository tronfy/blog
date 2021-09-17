import React from 'react'

import { GetStaticProps } from 'next'

import Head from '../../components/Head'
import Header from '../../components/Header'
import PostList from '../../components/PostList'
import { getAllPostMetas } from '../../scripts/getPosts'

type Props = {
  metas: PostMeta[]
}

const Blog: React.FC<Props> = props => {
  return (
    <>
      <Head title="blog" />

      <Header
        title="Hi, I'm Nícolas!"
        subtitle="And this is where I write about any interesting projects of mine."
      />

      <PostList metas={props.metas} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const metas = getAllPostMetas()

  return {
    props: {
      metas,
    },
  }
}

export default Blog
