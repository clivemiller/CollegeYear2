import { defineConfig } from 'vite';

// Note: @vitejs/plugin-react is optional; Vite handles JSX with esbuild.
// To keep dependencies minimal, we won't require it in package.json.

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
});
