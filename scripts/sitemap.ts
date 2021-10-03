import { writeFileSync } from 'fs'

import { SitemapStream, streamToPromise } from 'sitemap'

import { getAllPostMetas } from './getPosts'

const genSitemap = async (): Promise<void> => {
  const smStream = new SitemapStream({
    hostname: `https://nds.dev.br`,
    xmlns: {
      news: true,
      xhtml: true,
      image: true,
      video: true,
      custom: [
        'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
      ],
    },
  })

  // home
  smStream.write({
    url: `/`,
    lastmod: new Date(),
    changefreq: 'weekly',
    priority: 1,
  })

  // about
  smStream.write({
    url: `/sobre`,
    lastmod: new Date(),
    changefreq: 'weekly',
    priority: 0.8,
  })

  // blog
  const posts = getAllPostMetas()
  posts.forEach(post => {
    smStream.write({
      url: `/blog/${post.slug}/`,
      lastmod: new Date(post.frontmatter.date),
      changefreq: 'daily',
      priority: 0.9,
    })
  })

  smStream.end()
  const xmlSitemap = (await streamToPromise(smStream)).toString()
  writeFileSync('./public/sitemap.xml', xmlSitemap)
}
genSitemap()
