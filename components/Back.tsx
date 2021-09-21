import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Back.module.scss'

const Back: React.FC = () => {
  const { asPath } = useRouter()
  let displayUrl = asPath.split('/').slice(0, -1).join('/')
  if (!displayUrl) displayUrl = '/'

  if (asPath !== '/')
    return (
      <Link href={asPath + '/..'}>
        <a className={styles.back}>
          <span className="material-icons">arrow_back_ios</span>
          voltar para {displayUrl}
        </a>
      </Link>
    )
  else return <> </>
}

export default Back
