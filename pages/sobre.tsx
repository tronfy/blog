import React from 'react'

import Link from 'next/link'

import Head from '../components/Head'
import styles from '../styles/About.module.scss'

const About: React.FC = () => (
  <>
    <Head title="sobre" />

    <div className={styles.title}>
      <div className={styles.group}>
        <h1>nds</h1>
        <p className={styles.float}>
          <span>aka </span>
          nicolasdschmidt
          <span>, </span>
          tronfy
        </p>
      </div>
    </div>

    <p className="text">
      Sou um <strong>desenvolvedor full-stack com foco em back-end</strong>.
    </p>
    <br />
    <p className="text">
      Entre as tecnologias que mais domino estão <strong>Java</strong>, para
      desenvolvimento <strong>Android</strong> e de propósito geral; e{' '}
      <strong>JavaScript</strong>/<strong>TypeScript</strong>, especialmente com{' '}
      <strong>Node.js</strong> para desenvolvimento de servidores e APIs; também
      tenho familiaridade com <strong>Arduino</strong>/<strong>C++</strong> e
      eletrônica.
    </p>
    <br />
    <p className="text">
      Já na área de front-end, tenho costume de usar <strong>Next.js</strong>/
      <strong>React</strong>, e domínio de conceitos básicos de design, UI e UX.
    </p>

    <div className={styles.links}>
      <ul>
        <li>
          <Link href="/">
            <a>
              nds<span className={styles.dim}>.dev.br</span>
            </a>
          </Link>
        </li>
        <li>
          <a href="https://github.com/tronfy">
            <span className={styles.dim}>github.com/</span>tronfy
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/nicolasdschmidt">
            <span className={styles.dim}>linkedin.com/in/</span>
            nicolasdschmidt
          </a>
        </li>
        <li>
          <a href="mailto:nicolasdschmidt@protonmail.com">
            nicolasdschmidt<span className={styles.dim}>@protonmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  </>
)

export default About
