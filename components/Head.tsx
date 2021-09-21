import React from 'react'

import NextHead from 'next/head'

import Back from '../components/Back'

type Props = {
  title: string
}

const Head: React.FC<Props> = props => {
  return (
    <>
      <NextHead>
        <title>nds | {props.title}</title>
      </NextHead>

      <Back />
    </>
  )
}

export default Head
