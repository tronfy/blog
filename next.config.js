module.exports = {
	future: {
		webpack5: true,
	},
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		return config
	},
}
