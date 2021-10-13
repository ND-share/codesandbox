import { defineNuxtConfig } from '@nuxt/bridge'

const config = () => {
  return {
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
    plugins: ['~/plugins/vee-validate.js'],

    /**
     * コンポーネントをオートインポートする v2.13+
     * https://go.nuxtjs.dev/config-components
     *
     * 例はディレクトリ【components】配下の接頭辞Baseを全てオートインポートする設定
     */
    components: [{ path: '~/components', prefix: 'Base' }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/eslint
      [
        '@nuxtjs/eslint-module',
        {
          fix: true,
        },
      ],
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
    build: {
      transpile: ['vee-validate/dist/rules'],
    },

    serverMiddleware: { '/api': '~/api/index.js' },
  }
}

export default defineNuxtConfig(config)
