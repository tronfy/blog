import React from 'react'

import NextHead from 'next/head'

type Props = {
  title: string
}

const Head: React.FC<Props> = props => {
  return (
    <NextHead>
      <title>{props.title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"
      />
    </NextHead>
  )
}

export default Head
