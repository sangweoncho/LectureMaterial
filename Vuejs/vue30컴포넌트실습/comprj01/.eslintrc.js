module.exports = {
  root: true,
  env: {
    node: true,

    browser: true,
    commonjs: true,
    es6: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
    ] /* 라인당 최대 글자 수 설정 */,
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'always'] /* (a) => {} */,
    'arrow-body-style': 'off' /* 화살표 함수 관련 설정 */,
    'consistent-return': 'off' /* 화살표 함수 자동리턴 설정 */,
    'func-names': 'off' /* 변수 선언시 var 사용하면 오류 발생 */,
    'no-shadow': 'off',
    'no-alert': 'off' /* 변수 선언시 var 사용하면 오류 발생 */,
    'no-var': 'error' /* 변수 선언시 var 사용하면 오류 발생 */,
    'no-unused-vars': 'off',
    'no-param-reassign': [
      'error',
      { props: false },
    ] /* 함수의 매개변수를 변경할 때 오류발생*/,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
