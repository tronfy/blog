import React from 'react'

import NextHead from 'next/head'
import { useRouter } from 'next/router'

import Back from '../components/Back'

interface Props {
  title: string
  description?: string
}

const Head: React.FC<Props> = props => {
  const url = 'https://nds.dev.br'
  const { asPath } = useRouter()

  const description = props.description
    ? props.description
    : 'desenvolvedor full-stack com foco em back-end'

  return (
    <>
      <NextHead>
        <title>nds | {props.title}</title>

        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={url + '/logo-nobg.png'} />
        <meta property="og:url" content={url + asPath} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="nds.dev.br" />

        <meta property="og:description" content={description} />
      </NextHead>

      <Back />
    </>
  )
}

export default Head
