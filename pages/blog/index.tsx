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
        title="Oi, sou Nícolas!"
        subtitle="Aqui é onde escrevo sobre projetos interessantes que faço."
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
