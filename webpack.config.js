const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {

    const ENTRY_FILE = 'index.tsx'
    const BUNDLE_FILE = 'index.js'

    const SOURCE = 'src'
    const OUTPUT = 'dist'

    const IS_DEVELOPMENT = argv.mode === 'development';

    return {
        entry: {
            index: path.resolve(__dirname, SOURCE, ENTRY_FILE),
        },
        output: {
            path: path.resolve(__dirname, OUTPUT),
            filename: BUNDLE_FILE,
        },
        devtool: IS_DEVELOPMENT ? 'inline-source-map' : IS_DEVELOPMENT,
        resolve: {
            extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            alias: {
                '@src': path.resolve(__dirname, SOURCE),
            },
        },
        devServer: {
            open: true,
            contentBase: path.resolve(__dirname, 'dist'),
            watchContentBase: true,
            historyApiFallback: true,
        },
        module: {
            rules: RULES
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                minify: {
                    collapseWhitespace: IS_DEVELOPMENT ? false : true
                }
            }),
        ],
    }
}

const RULES = [
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
    },{
        test: /\.(sass)$/,
        exclude: /\.(module)\.(sass)$/,
        use: [
            'style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {plugins: [require('autoprefixer')]}
            }, 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*.sass')
                    ]
                }
            }
        ]
    },{
        test: /\.(module)\.(sass)$/,
        use: [
            'style-loader', {
                loader: 'css-loader',
                options: {modules: true}
            },{
                loader: 'postcss-loader',
                options: {
                    plugins: [require('autoprefixer')]
                }
            }, 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*.sass')
                    ]
                }
            }
        ]
    },{
        test: /\.(html)$/,
        loader: 'html-loader'
    }
]