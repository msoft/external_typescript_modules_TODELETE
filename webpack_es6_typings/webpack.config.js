const path = require('path');

module.exports = {
	  entry: './index.ts',
	  module: {
		      rules: [
			            {
					            use: 'ts-loader',
					            exclude: /node_modules/
					          }
			          ]
		    },
	  resolve: {
		      extensions: [ '.tsx', '.ts', '.js' ]
		    },
	  output: {
		      filename: 'app.js',
		      path: path.resolve(__dirname, 'public')
				},
		devServer: {
					contentBase: [
						path.resolve(__dirname, "public"),
						path.resolve(__dirname, "node_modules")
					],
					publicPath:  "/"
			}
};
