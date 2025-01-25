import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		target: 'esnext',
	},
	preview: {
		port: 3000,
		strictPort: true,
		host: '0.0.0.0', 
		allowedHosts: true,
	},
	server: {
		allowedHosts: true
	},
});