////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* eslint camelcase: ["error", {properties: "never"}] */
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    modulesDirectories: ['node_modules', 'src'],
    assets: {
        images: {
            extensions: [
                'jpeg',
                'jpg',
                'png',
                'gif'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        ico: {
            extensions: [
                'ico'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        fonts: {
            extensions: [
                'woff',
                'woff2',
                'eot',
                'ttf'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        }
    }
};
