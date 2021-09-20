import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Head from '../components/Head'
import logo from '../public/logo.png'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  return (
    <>
      <Head title="about" />

      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.group}>
            <h1>
              <Image
                src={logo}
                alt="nds logo"
                width={40}
                height={40}
                draggable="false"
              />
              nds
            </h1>
            <p className={styles.float}>
              <span>aka </span>
              nicolasdschmidt
              <span>, </span>
              tronfy
            </p>
          </div>
          <p>Desenvolvedor de Software</p>

          <a
            href="/static/Nícolas D. Schmidt - CV.pdf"
            download
            className="nostyle"
          >
            <button>
              <span className="material-icons">download</span>
              currículo
            </button>
          </a>
        </div>

        <p className="text">
          Tenho 17 anos e sou um desenvolvedor full-stack com foco em back-end.
          Busco por oportunidades de estágio para que possa continuar me
          desenvolvendo profissionalmente.
        </p>

        <div className={styles.links}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/nicolasdschmidt">
                <span className={styles.dim}>linkedin.com/in/</span>
                nicolasdschmidt
              </a>
            </li>
            <li>
              <a href="mailto:nicolasdschmidt@pm.me">
                nicolasdschmidt<span className={styles.dim}>@pm.me</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/tronfy">
                <span className={styles.dim}>github.com/</span>tronfy
              </a>
            </li>
            <li>
              <Link href="/">
                <a>
                  nds<span className={styles.dim}>.dev.br</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
