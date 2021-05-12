export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fundación Bolivar Davivienda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/config/constants.js' },
    { src: '~/config/aflora.js' },
    { src: '~/config/actualidad.js' },
    { src: '~/config/eventos.js' },
    { src: '~/config/filarmonicaJovenDeColombia.js' },
    { src: '~/config/voluntariadoFundacionBolivarDavivienda.js' },
    { src: '~/config/emprendePais.js' },
    { src: '~/config/inversionSocial.js' },
    { src: '~/config/becasAlTalento.js' },
    { src: '~/config/cultivarte.js' },
    { src: '~/plugins/common.js', mode: 'client' },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
  ],

  router: {
    middleware: 'router',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: '260015767',
      debug: {
        enabled: false,
        sendHitTask: false
      }
    }]
  ],

  gtm: {
    id: 'GTM-P2SN3XB',
    debug: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/gtm
    '@nuxtjs/gtm',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    babel: {
      compact: true,
    },
  },
}
