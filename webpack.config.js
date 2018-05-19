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
			// https://github.com/feathersjs/rest-client/issues/14#issuecomment-344400104
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
