import colors from 'vuetify/es5/util/colors'
// const path = require('path')

export default {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3020'
      }
    }
  },
  // mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Resources and such' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Caveat&family=Sacramento&family=Satisfy&family=Allerta+Stencil&family=Stardos+Stencil:wght@700&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [ '~assets/style/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bus',
    '~plugins/core-components',
    // '~plugins/iview',
    // '~store/index'
  ],
  components: true,
  router : {
    // middleware: []
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    // 'nuxt-polyfill'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:3020/'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  //  vendor: ['iview'],
    extend(config, ctx) {
    }
  }
  
}
