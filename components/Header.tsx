import React from 'react'

import styles from '../styles/Header.module.scss'

type Props = {
  title: string
  subtitle: string
  extra?: JSX.Element
}

const Header: React.FC<Props> = props => {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      {props.extra ? <div className={styles.extra}>{props.extra}</div> : <></>}
    </header>
  )
}

export default Header
