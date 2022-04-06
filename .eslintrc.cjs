/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    'root'       : true,
    'parser'     : 'vue-eslint-parser',
    'extends'    : [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    'env'        : {
        'vue/setup-compiler-macros': true,
    },
};
