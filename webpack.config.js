module.exports = {
    entry: "./www/app/app.module.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "./www/dist/bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: [/node_modules/]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                exclude: [/node_modules/]
            }, 
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=100000',
                include: [/node_modules/]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true
};