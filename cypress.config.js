import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://hey-shubhamk.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return {
        video: true,
        screenshotOnRunFailure: true,
        retries: { runMode: 2, openMode: 0 },
        viewportWidth: 1280,
        viewportHeight: 720,
      };
    },
  },
});
