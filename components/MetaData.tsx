import React from 'react'

import simpleDate from '../scripts/simpleDate'

type Props = {
  date: string
  readTime: number
}

const MetaData: React.FC<Props> = props => {
  const date = simpleDate(new Date(props.date))
  return (
    <>
      <span>{date}</span>
      <span>{' • '}</span>
      <span>leitura de {props.readTime}min</span>
    </>
  )
}

export default MetaData
