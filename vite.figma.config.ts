import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],assetsInclude:['**/figma/assets/*'],build:{outDir:'dist/figma',copyPublicDir:false,lib:{entry:'src/figma/index.ts',formats:['es'],fileName:'index',cssFileName:'ecs-figma'},rolldownOptions:{external:['react','react/jsx-runtime'],output:{preserveModules:true,preserveModulesRoot:'src/figma',entryFileNames:'[name].js'}}}});
