const { withFederation, shareAll } = require('@module-federation/esbuild/build');

module.exports = withFederation({
    name: 'myRemoteAppThree',
    filename: 'remoteEntry.js',
    exposes: {
        './ToDoComponent': './src/components/ExampleComponent.jsx',
    },
    shared: {
        react: {
            singleton: true,
            version: '^18.2.0',
        },
        'react-dom': {
            singleton: true,
            version: '^18.2.0',
        },
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto',
            includeSecondaries: false,
        }),
    },
});
