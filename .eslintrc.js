module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier/@typescript-eslint',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:prettier/recommended',
    ],
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    parserOptions: {
        // 支持最新 JavaScript
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // 尾部逗号控制，在 WebStorm 中配置 js 对象、数组在多行的时候会强制在每行尾部加逗号（包括最后一行）
        // 这个会在 function 的参数后面也做此处理，虽然 es6 之后支持这种逗号，但是比较旧的浏览器可能不支持此属性
        // 所以在这儿重定义此属性，不允许 function 参数最后出现逗号
        'comma-dangle': ['error', {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }],
    },
    globals: {
        __DEV__: false,
    },
    settings: {
        react: {
            pragma: 'React', // Pragma to use, default to "React"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
        },
    },
};
