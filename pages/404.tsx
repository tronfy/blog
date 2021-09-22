import React from 'react'

import Head from '../components/Head'
import styles from '../styles/Error.module.scss'

const _404: React.FC = () => {
  return (
    <>
      <Head title="404" />

      <div className={styles.error}>
        <h1>404</h1>
        <p>página não encontrada</p>
      </div>
    </>
  )
}

export default _404
