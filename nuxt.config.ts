import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    buildModules: [
        '@pinia/nuxt',
    ],

    components: true,
    css: [

        '~/assets/styles/index.css',

    ],
    plugins: ['~/plugins/clk-outside.js'],
    vite: {
        css: {
            preprocessorOptions: {
                sсss: {
                    additionalData: '@import "@/assets/styles/_variables.sсss"',
                },
            },
        },

    },
})
