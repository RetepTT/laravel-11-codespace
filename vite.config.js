import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            
        }),
        

    ],
    server: {
        hmr: {
            host: process.env.CODESPACE_NAME ? process.env.CODESPACE_NAME + '-5173.app.github.dev' : null,
            clientPort: process.env.CODESPACE_NAME ? 443 : null,
            protocol: process.env.CODESPACE_NAME ? 'wss' : null,
            // cors : true
            
        },    
        cors: {
            origin: true // disable CORS
            // origin: process.env.CODESPACE_NAME + '-5173.app.github.dev' // disable CORS
                
        },
        watch: true,

        // cors: true
    },
    
    // server: {
        // host : 'https://upgraded-doodle-vppw9j9vvxr2w4j4-3000.app.github.dev/',
        // port: 3000,
        
        // hmr: {
            // host: 'upgraded-doodle-vppw9j9vvxr2w4j4-5173.app.github.dev',
            // clientPort: ''
        // },
        // cors: 'true',
        // https: 'true'
    //   }
    // server: {
    //     hmr: {
    //         host: 'upgraded-doodle-vppw9j9vvxr2w4j4-5173.app.github.dev',
    //     },
    // },
});

