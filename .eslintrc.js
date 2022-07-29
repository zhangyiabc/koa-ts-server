module.exports = {

  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/semi': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 3 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'object-curly-newline': ['error', { 'consistent': true }],
    'max-len': ['error', { code: 160 }],
    'no-plusplus': 0,
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0
  }
}
