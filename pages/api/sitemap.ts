import type { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

import { getAllPostMetas } from '../../scripts/getPosts'

const sitemap = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
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
    const sitemapOutput = (await streamToPromise(smStream)).toString()
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })
    res.end(sitemapOutput)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}

export default sitemap
