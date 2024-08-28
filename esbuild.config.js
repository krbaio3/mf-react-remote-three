// esbuild.config.js
const esbuild = require('esbuild');
const { moduleFederationPlugin } = require('@module-federation/esbuild/plugin');
const path = require('path');
const federationConfig = require('./federation.config.js');


async function buildApp() {
    const outputPath = path.join(__dirname, 'dist');

    try {
        await esbuild.build({
            entryPoints: [path.join('src', 'bootstrap.js')],
            outdir: outputPath,
            // outfile: 'index.js',
            bundle: true,
            minify: false,
            platform: 'browser',
            format: 'esm',
            // target: 'es2015',
            mainFields: ['es2020', 'browser', 'module', 'main'],
            conditions: ['es2020', 'es2015', 'module'],
            resolveExtensions: ['.ts', '.tsx', '.mjs', '.js'],
            external: ['@module-federation/webpack-bundler-runtime', 'react', 'react-dom'],
            splitting: true,
            plugins: [moduleFederationPlugin(federationConfig)],
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

buildApp();