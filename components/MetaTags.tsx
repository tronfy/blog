import React from 'react'

type Props = {
  tags: string[]
}

const MetaTags: React.FC<Props> = props => {
  return (
    <>
      {props.tags.sort().map((tag, idx) => (
        <span key={idx}>
          <span>{tag}</span>
          {idx < props.tags.length - 1 ? <span>{' • '}</span> : ''}
        </span>
      ))}
    </>
  )
}

export default MetaTags
