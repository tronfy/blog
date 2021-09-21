import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Head from '../components/Head'
import logo from '../public/logo.png'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  const getAge = (birthDate: Date): number => {
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--
    return age
  }

  return (
    <>
      <Head title="about" />

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
        Sou um <strong>desenvolvedor full-stack com foco em back-end</strong>.
        Tenho {getAge(new Date('2004-08-13'))} anos e busco por oportunidades de
        estágio para que possa continuar me desenvolvendo profissionalmente.
      </p>
      <br />
      <p className="text">
        Entre as tecnologias que mais domino estão <strong>Java</strong>, para
        desenvolvimento <strong>Android</strong> e de propósito geral; e{' '}
        <strong>JavaScript</strong>/<strong>TypeScript</strong>, especialmente
        com <strong>Node.js</strong> para desenvolvimento de servidores e APIs;
        também tenho familiaridade com <strong>Arduino</strong>/
        <strong>C++</strong> e eletrônica.
      </p>
      <p className="text">
        Já na área de frontend, tenho costume de usar <strong>React</strong> em
        servidores <strong>Node.js</strong> ou <strong>Next.js</strong>, e
        domínio de conceitos básicos de design, UI e UX.
      </p>
      <br />
      <p className="text">
        Ultimamente venho dedicando meu tempo livre para aprender{' '}
        <strong>Rust</strong>, e espero desenvolver alguns projetos pessoais com
        essa linguagem em breve.
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
            <a href="mailto:nicolasdschmidt@pm.me">
              nicolasdschmidt<span className={styles.dim}>@pm.me</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicolasdschmidt">
              <span className={styles.dim}>linkedin.com/in/</span>
              nicolasdschmidt
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default About
