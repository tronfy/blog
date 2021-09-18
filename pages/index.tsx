import React from 'react'

import Link from 'next/link'

import Head from '../components/Head'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <Head title="home" />

      <div className={styles.center}>
        <h1 className="noselect">nds</h1>
        <br />
        <ul className={`${styles.menu} noselect`}>
          <li>
            <Link href="blog">
              <a>blog</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/tronfy">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicolasdschmidt">linkedin</a>
          </li>
        </ul>
        <p>
          nicolasdschmidt
          <span>@</span>
          pm.me
        </p>
      </div>
    </>
  )
}

export default Home
