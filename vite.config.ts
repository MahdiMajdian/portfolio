import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr({ include: '**/*.svg' })],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{
				find: '@utilities',
				replacement: path.resolve(__dirname, 'src/utilities'),
			},
			{
				find: '@assets',
				replacement: path.resolve(__dirname, 'src/assets'),
			},
			{
				find: '@icons',
				replacement: path.resolve(__dirname, 'src/assets/icons'),
			},
			{
				find: '@pages',
				replacement: path.resolve(__dirname, 'src/pages'),
			},
			{
				find: '@services',
				replacement: path.resolve(__dirname, 'src/services'),
			},
			{
				find: '@constants',
				replacement: path.resolve(__dirname, 'src/constants'),
			},
			{
				find: '@types',
				replacement: path.resolve(__dirname, 'src/types'),
			},
		],
	},
});
