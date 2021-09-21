import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Back.module.scss'

const Back: React.FC = () => {
  const { asPath } = useRouter()
  let backUrl = asPath
    .split('#')[0]
    .split('?')[0]
    .split('/')
    .slice(0, -1)
    .join('/')
  if (!backUrl) backUrl = '/'

  if (asPath !== '/')
    return (
      <Link href={backUrl}>
        <a className={styles.back}>
          <span className="material-icons">arrow_back_ios</span>
          voltar para {backUrl}
        </a>
      </Link>
    )
  else return <></>
}

export default Back
