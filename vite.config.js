import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
const ReactCompilerConfig = {
  // target: '19' // Can be '17' | '18' | '19', default is 19
};
export default defineConfig({
  plugins: [react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', ReactCompilerConfig], // Must run first in the list
        ],
      },}), tailwindcss()],
  build: { sourcemap: true }
});
