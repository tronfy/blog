import React from 'react'

import glob from 'glob'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {
  NormalComponents,
  SpecialComponents,
} from 'react-markdown/src/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import Head from '../../components/Head'
import Header from '../../components/Header'
import { getPost } from '../../scripts/getPosts'
import slugify from '../../scripts/slugify'
import styles from '../../styles/PostPage.module.scss'
import prismTheme from '../../styles/prism-custom'

type Props = {
  slug: string
}

const PostPage: React.FC<Props> = props => {
  const post = getPost(props.slug)
  const components: Partial<NormalComponents & SpecialComponents> = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={prismTheme}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
    a({ children, ...props }) {
      const href = props.node.properties.href.toString()
      if (href.startsWith('http')) return <a href={href}>{children[0]}</a>
      return (
        <Link href={href}>
          <a>{children[0]}</a>
        </Link>
      )
    },
    h2({ children, ...props }) {
      return React.createElement(
        'h' + props.level,
        { id: slugify(children[0] as string) },
        children[0]
      )
    },
    h3({ children, ...props }) {
      return React.createElement(
        'h' + props.level,
        { id: slugify(children[0] as string) },
        children[0]
      )
    },
    h4({ children, ...props }) {
      return React.createElement(
        'h' + props.level,
        { id: slugify(children[0] as string) },
        children[0]
      )
    },
    h5({ children, ...props }) {
      return React.createElement(
        'h' + props.level,
        { id: slugify(children[0] as string) },
        children[0]
      )
    },
    h6({ children, ...props }) {
      return React.createElement(
        'h' + props.level,
        { id: slugify(children[0] as string) },
        children[0]
      )
    },
  }

  return (
    <>
      <Head title={post.meta.frontmatter.title} />

      <Header
        title={post.meta.frontmatter.title}
        subtitle={post.meta.frontmatter.description}
      />

      <div className={styles.markdown}>
        <ReactMarkdown components={components}>{post.body}</ReactMarkdown>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      slug: ctx.params.slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get all .md files in the posts dir
  const blogs = glob.sync('posts/**/*.md')

  // remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file.split('/')[1].replace(/ /g, '-').slice(0, -3).trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/posts/${slug}`)
  return {
    paths,
    fallback: false,
  }
}

export default PostPage
