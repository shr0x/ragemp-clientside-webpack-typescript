const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.ts')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve('../../', 'client_packages'),
        filename: 'client.js'
    },
};
