export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'codesandbox',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: process.env.NODE_ENV === 'development' ? 2999 : 3000,
  },

  env: {
    ENV: process.env.NODE_ENV,
  },

  // SSR検証用
  ssr: true,
  // ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'bulma',
    '~/assets/style/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  /**
   * コンポーネントをオートインポートする v2.13+
   * https://go.nuxtjs.dev/config-components
   */
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/moment-module#readme
    '@nuxtjs/moment',
  ],

  // モジュール
  modules: ['@nuxtjs/axios'],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: { '/api': '~/api/index.js' },

}
