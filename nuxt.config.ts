// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      //'@fortawesome/pro-regular-svg-icons',
      //'@fortawesome/pro-light-svg-icons',
      //'@fortawesome/free-brands-svg-icons'
    ],
  },
  //  plugins: [
  //   {
  //     src: "~/plugins/fontAwesome.js",
  //     ssr: false,
  //   },
  // ],
  // devtools: { enabled: true }
})
