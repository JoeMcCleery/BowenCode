const websiteRoutes = async () => {
  let routes = [], articles = [];
  const { $content } = require('@nuxt/content')
  if (articles.length === 0)
    articles = await $content('articles').fetch();
  for (const article of articles) {
    routes.push(`Blog/${article.slug}`);
  }
  return routes;
}

export default {
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  generate: {
    routes: websiteRoutes,
    fallback: true
  },

  router: {
    mode: 'history'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'BowenCode',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BowenCode Wine Management System' },
      { name: 'google-site-verification', content: 'wF-RgMjo_93gqBQsRt-eSBoGlug0BW2o1xxvuyXY7s8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'white'
  },
  /*
  ** Global CSS
  */
  css: [
    // Main UIkit file
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/uikit', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],

  content: {
    // Options
    nestedProperties: ['articles.slug'],
    liveEdit: true
  },

  googleAnalytics: {
    id: 'UA-180176943-1'
  },

  sitemap: {
    hostname: 'https://bowencode.com.au',
    gzip: true,
    routes: websiteRoutes
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    loaders:
      {
        vue: {
          transformAssetUrls: {
            img: "data-src",
            div: "data-src"
          }
        }
      }
  }
}
