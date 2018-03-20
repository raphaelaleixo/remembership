const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Encode+Sans:400,800' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f2557f' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.scss' 
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
  
  // router: {
  //   extendRouter(routes,resolve) {
  //     routes.push({
  //       path: '/',
  //       component:resolve(__dirname, 'pages/index.vue')
  //     })
  //   }
  // }
}
