const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");

module.exports = {
	mode: "development",

	entry: ["@babel/polyfill", "./src/index.jsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js",
	},
	devServer: {
		port: 3000,
	},
	resolve: {
		extensions: [".js", "jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
				use: ["file-loader"],
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
};
