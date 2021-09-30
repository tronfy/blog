module.exports = {
  webpack5: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    if (!isServer) return config

    return {
      ...config,
      entry() {
        return config.entry().then(entry => {
          return Object.assign({}, entry, {
            sitemap: './scripts/sitemap.ts',
          })
        })
      },
    }
  },
}
