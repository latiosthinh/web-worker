import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	plugins: [
		ViteMinifyPlugin({}),
	],
  build: {
    lib: {
      entry: 'partytown.js', // Your entry point
      name: 'partytown', // Your library name
      fileName: 'partytown.js', // Output file name
    }
  },
})