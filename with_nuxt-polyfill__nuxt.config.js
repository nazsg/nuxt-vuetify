import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
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
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bus',
    '~plugins/core-components',
    '~plugins/iview'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    'nuxt-polyfill'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://nazs.net/'
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
    extend(config, ctx) {
    }
  },
  polyfill: {
    features: [
        /* 
            Feature without detect:

            Note: 
              This is not recommended for most polyfills
              because the polyfill will always be loaded, parsed and executed.
        */
        {
            require: 'url-polyfill' // NPM package or require path of file
        },

        /* 
            Feature with detect:

            Detection is better because the polyfill will not be 
            loaded, parsed and executed if it's not necessary.
        */
        {
            require: 'intersection-observer',
            detect: () => 'IntersectionObserver' in window,
        },

        /*
            Feature with detect & install:

            Some polyfills require a installation step
            Hence you could supply a install function which accepts the require result
        */
        {
            require: 'smoothscroll-polyfill',

            // Detection found in source: https://github.com/iamdustan/smoothscroll/blob/master/src/smoothscroll.js
            detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,

            // Optional install function called client side after the package is required:
            install: (smoothscroll) => smoothscroll.polyfill()
        }
    ]
}
  
}
