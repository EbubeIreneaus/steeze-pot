// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-quasar-ui",
    "nuxt-aos",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
    '@prisma/nuxt'
  ],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    layoutTransition: {name: 'layout', mode: 'out-in'}
  },
  css: ['~/assets/css/style.css'],
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },

  runtimeConfig: {
    jwt_secret: process.env.JWT_SECRET
  },

  quasar: {
    plugins: ["Dialog", "Notify"],
    iconSet: "fontawesome-v6",
    extras: {
      fontIcons: ["fontawesome-v6", "material-icons"],
    },
    config: {
      brand: {
        primary: "#292D36",
        secondary: "#FFFFD6",
        info: "#007ed7",
        success: "#009b6f",
        warning: "#eab308",
        error: "#dc2626",
      },
    },
  },
});