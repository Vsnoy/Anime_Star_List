module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    /** 去除末尾分号 */
    semi: [2, 'never'],
    /** 去除尾随空格 */
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    /** 结尾逗号 */
    'comma-dangle': ['error', {
      functions: 'never'
    }],
    /** 驼峰命名 */
    camelcase: 'off',

    /** 无关依赖 */
    'import/no-extraneous-dependencies': 'off',
    /** 结尾换行符 */
    'linebreak-style': [0, 'error', 'windows'],

    /** 强制根元素 */
    'vue/valid-template-root': 'off',
    /** Vue组件驼峰命名检查 */
    'vue/multi-word-component-names': 0
  }
}
