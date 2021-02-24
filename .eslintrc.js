module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 研修用にOFF
    // https://eslint.vuejs.org/rules/v-bind-style.html
    'vue/v-bind-style': 'off',
    // 研修用にOFF
    // https://eslint.vuejs.org/rules/v-on-style.html
    'vue/v-on-style': 'off',
  },
}
