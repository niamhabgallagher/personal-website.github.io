// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/personal-website.github.io/',
    buildAssetsDir: 'assets'
  },
  modules: ['nuxt-lenis', ['@nuxtjs/google-fonts', {
    families: {
      'Dancing Script': true,
      Poppins: true
    }
}]],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    // '@/assets/css/main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;',
        }
      }
    },
  },
})