module.exports = {

  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended'],//定义文件继承的子规范
  plugins: ['@typescript-eslint'],//定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures": {
      jsx: true
    }
  },

  rules: {
    // 'comma-dangle': ['error', 'only-multiline'],
    // '@typescript-eslint/semi': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'object-curly-newline': ['error', { 'consistent': true }],
    'max-len': ['error', { code: 160 }],
    // 'no-plusplus': 0,
    // 'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 0,
    // '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    // 'import/prefer-default-export': 0,
    // 'no-restricted-syntax': 0
  }
}
