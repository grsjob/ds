import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()], build: { copyPublicDir: false, lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'ecs-design-system', cssFileName: 'ecs-design-system' }, rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime'] } }, test: { environment: 'jsdom', setupFiles: ['./src/test-setup.ts'], css: true } });
