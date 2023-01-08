export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Trabalhante',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [{ src: '/plugins/hotjar/hotjar.js', mode: 'client' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;600&display=swap',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./static/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  bootstrapVue: {
    icons: true,
  },
  googleAnalytics: {
    // Options
    id: 'G-SGFE10D2ED',
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
