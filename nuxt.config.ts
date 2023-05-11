// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          link: [
            { rel: 'stylesheet', href: '~/assets/styles/global.css' }
          ],
          noscript: [
            { children: 'JavaScript is required' }
          ]
        }
    } 
})
