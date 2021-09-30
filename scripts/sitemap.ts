import { writeFileSync } from 'fs'

import { SitemapStream, streamToPromise } from 'sitemap'

import { getAllPostMetas } from './getPosts'

const genSitemap = async (): Promise<void> => {
  const smStream = new SitemapStream({
    hostname: `https://nds.dev.br`,
  })

  // home
  smStream.write({
    url: `/`,
    changefreq: 'weekly',
    priority: 1,
  })

  // about
  smStream.write({
    url: `/sobre`,
    changefreq: 'weekly',
    priority: 0.8,
  })

  // blog
  const posts = getAllPostMetas()
  posts.forEach(post => {
    smStream.write({
      url: `/blog/${post.slug}/`,
      changefreq: 'daily',
      priority: 0.9,
    })
  })

  smStream.end()
  const xmlSitemap = (await streamToPromise(smStream)).toString()
  writeFileSync('./public/sitemap.xml', xmlSitemap)
}
genSitemap()
