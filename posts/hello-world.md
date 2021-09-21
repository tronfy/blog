---
title: 'Olá, mundo!'
description: '3 meses depois, enfim o blog está pronto!'
date: '2021-09-21'
tags: ['blog', 'markdown', 'next.js', 'web']
---

Depois de mais de 3 meses indo e vindo entre tantos projetos, consegui finalizar esse aqui. O intuito era aprender **Next.js**, mesmo sem ainda saber usar **React**, então meio que acabei me introduzindo às duas frameworks. O projeto está disponível no [GitHub](https://github.com/tronfy/blog).

## Considerações

Minha ideia inicial era construir um site básico, com introdução e informações de contato, mas isso seria simples demais. Pensei em codar um portfólio, talvez, assim eu poderia exibir projetos anteriores de maneira organizada. Mas não, isso também era muito básico para aprender as frameworks (apesar de que ainda pretendo fazê-lo).

Foi aí que surgiu a ideia de implementar um **blog** como esse! Eu queria um sistema em que pudesse escrever posts em **Markdown**, talvez com um header **Frontmatter**, e o site lidasse com a parte de renderizar, estilizar, injetar links relativos e âncoras, exibir `código formatado`, etc.

Além disso, resolvi fazer tudo com **TypeScript** pra sair de vez da zona de conforto.

## Showcase

Alguns exemplos das capabilidades do renderizador customizado que implementei para gerar o blog.

### Links âncora

* [Considerações](#consideracoes)
* [Imagem](#imagem)

### Codeblock com highlight

```tsx
interface Frontmatter {
    title: string
    description: string
    date: string
    tags: string[]
  }

  interface PostMeta {
    frontmatter: Frontmatter
    slug: string
    readTime: number
  }

  interface Post {
    meta: PostMeta
    body: string
  }
```

### Exemplo de post

```md
---
title: 'Olá, mundo!'
description: 'Enfim, o blog está pronto!'
date: '2021-09-21'
tags: ['blog', 'markdown', 'next.js', 'web']
---

## Exemplo

Isso tá ficando meio *meta*
```

### Blockquote

> Ghastly grim and ancient raven wandering from the Nightly shore —
>
> Tell me what thy lordly name is on the Night's Plutonian shore!"
>
> Quoth the Raven, "Nevermore."

### Imagem

![Foto de uma folha de bordo sendo segurada em primeiro plano. No plano de fundo, uma floresta de araucárias](/leaf.jpg)

## Conclusão

Pretendo postar aqui sobre projetos que faço (ou pretendo fazer), e a pesquisa necessária para desenvolvê-los. Talvez eu publique, mais pra frente, um post mais técnico sobre esse blog, detalhando tanto as elegâncias quanto as gambiarras usadas para construí-lo.
