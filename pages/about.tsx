import React from 'react'

import Head from '../components/Head'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  return (
    <>
      <Head title="home" />

      <div className={styles.content}>
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
              <a href="https://github.com/tronfy">
                <i className="fab fa-github" /> tronfy
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolasdschmidt">
                <i className="fab fa-linkedin" /> nicolasdschmidt
              </a>
            </li>
            <li>
              <a href="mailto:nicolasdschmidt@pm.me">
                <i className="far fa-envelope" /> nicolasdschmidt@pm.me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
