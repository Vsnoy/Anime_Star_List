module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    /** 去除末尾分号 */
    semi: [0],
    /** 去除尾随空格。换行除外。 */
    'no-trailing-spaces': ['error', { skipBlankLines: true }],

    /** 检查无关依赖。暂时关闭。 */
    'import/no-extraneous-dependencies': 'off',

    /** Vue3不再强制需要一个根元素，可关闭 */
    'vue/no-multiple-template-root': 'off',
  },
};
