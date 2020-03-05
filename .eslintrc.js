module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        experimentalDecorators: false
    },
    env: {
        es6: true,
        mocha: true,
        node: true
    },
    plugins: ['babel', 'mocha', 'prettier'],
    rules: {
        'mocha/no-exclusive-tests': 'error',
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4, { flatTernaryExpressions: true, Switchdescription: 1 }],
        'linebreak-style': ['error', 'unix'],
        'no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: 'should|expect'
            }
        ],
        'no-console': 2,
        'no-redeclare': 'warn',
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always']
    },
    globals: {
        browser: true,
        expect: true,
        reporter: true,
        $: true,
        $$: true
    }
};
