const config = {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: { lang: 'pt-br' },
    title: 'Rafael de Almeida | B.S Web Design and Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: [
          'javascript',
          'html',
          'css',
          'browsers',
          'navegadores',
          'frontend',
          'front-end',
          'programação',
          'programming',
          'tutorials',
          'tutoriais',
          'dicas',
          'how to',
        ],
      },
      {
        hid: 'description',
        name: 'description',
        content: `Aqui você encontrará dicas de desenvolvimento para aplicativos front-end. vamos mergulhar em tópicos como Javascript, HTML, CSS, navegadores e muito mais.`,
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'robots', content: 'all' },
      { name: 'googlebot', content: 'all' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-placeholders.js', '~/plugins/line-clamp.client.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: ['@nuxtjs/style-resources', '@nuxtjs/markdownit', '@nuxtjs/vuetify'],

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#00a5ff', // #E53935
        },
      },
    },
  },

  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    html: true,
    breaks: true,
    injected: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },
};

export default config;
