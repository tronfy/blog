module.exports = {
	future: {
		webpack5: true,
	},
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'global.nds.dev.br',
        defaultLocale: 'en-US',
      },
      {
        domain: 'nds.dev.br',
        defaultLocale: 'pt-BR',
      }
    ],
  },
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		return config
	},
}
