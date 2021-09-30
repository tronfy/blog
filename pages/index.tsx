import React from 'react'

import Link from 'next/link'

import Head from '../components/Head'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <Head title="home" />

      <div className={styles.center}>
        <h1 className="noselect">
          <input type="checkbox" id="n" />
          <label htmlFor="n">
            <span>n</span>
          </label>
          <input type="checkbox" id="d" />
          <label htmlFor="d">
            <span>d</span>
          </label>
          <input type="checkbox" id="s" />
          <label htmlFor="s">
            <span>s</span>
          </label>
        </h1>
        <div>
          <ul className={`${styles.menu} noselect`}>
            <li>
              <Link href="/blog">
                <a>blog</a>
              </Link>
            </li>
            <li>
              <a href="https://github.com/tronfy">github</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/nicolasdschmidt">linkedin</a>
            </li>
            <li>
              <Link href="/sobre">
                <a>sobre</a>
              </Link>
            </li>
          </ul>
          <p>
            nicolasdschmidt
            <span>@</span>
            pm.me
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
