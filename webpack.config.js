module.exports = {
	entry: ['babel-polyfill', './client/index.js'],
	output: {
		path: `${__dirname}/public`,
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules\/(?!(@feathersjs))/,
			use: {
				loader: 'babel-loader'
				// options: {
				//   presets: ['@babel/preset-env']
				// }
			}
		}]
	},
	resolve: {
		extensions: ['.js']
	},
	devtool: 'eval-source-map'
}
