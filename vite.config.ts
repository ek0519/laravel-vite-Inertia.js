import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig(({ command }: ConfigEnv) => {
    return {
        base: command === 'build' ? '/dist/' : '',
        publicDir: false,
        build: {
            manifest: true,
            outDir: "public/dist",
            rollupOptions: {
                input: {
                    app: "resources/js/app.ts",
                },
            },
        },
        resolve:{
          alias:{
              '@':'resources/js',
              ziggy: "vendor/tightenco/ziggy/dist/vue.m.js",
          }
        },
        server: {
            strictPort: true,
            port: 3030,
            // https: true,
            hmr: {
                host: "localhost",
            },
        },
        plugins: [
            vue(),
            eslintPlugin()
        ],
        optimizeDeps: {
            include: [
                "@inertiajs/inertia",
                "@inertiajs/inertia-vue3",
                "axios",
                "vue",
                "ziggy"
            ],
        },
    }
})
