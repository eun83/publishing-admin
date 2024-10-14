const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');


module.exports = {
    entry: '/dummy.js',
    output: {
        filename: 'dummy.js',
        path: path.resolve(__dirname, 'html'),
    },
    mode: 'development',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'node_modules/tui-grid/dist'),
                    to: 'lib/tui-grid',
                    globOptions: {
                        dot: false,
                        gitignore: false,
                        ignore: ['**/*.LICENSE.txt']
                    }
                },
                { 
                    from: path.resolve(__dirname, 'node_modules/tui-pagination/dist'),
                    to: 'lib/tui-pagination',
                    globOptions: {
                        dot: false,
                        gitignore: false,
                        ignore: ['**/*.LICENSE.txt']
                    }
                },
                { 
                    from: path.resolve(__dirname, 'node_modules/tui-date-picker/dist'),
                    to: 'lib/tui-date-picker',
                    globOptions: {
                        dot: false,
                        gitignore: false,
                        ignore: ['**/*.LICENSE.txt']
                    }
                },
                { 
                    from: path.resolve(__dirname, 'node_modules/tui-time-picker/dist'),
                    to: 'lib/tui-time-picker',
                    globOptions: {
                        dot: false,
                        gitignore: false,
                        ignore: ['**/*.LICENSE.txt']
                    }
                }
            ],
        }),
        new WebpackShellPluginNext({
            onBuildStart: {
                scripts: ['touch dummy.js'], // bundle.js 파일의 타임스탬프를 업데이트
            },
            onBuildEnd: {
                scripts: ['rm -f dummy.js html/dummy.js'],
            },
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({ extractComments: true })
        ]
    }
};