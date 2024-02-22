import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: "html",
  timeout: 120000,
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      testDir: "./tests/ui",
      name: "UI Tests",
      use: {
        headless: false,
        baseURL: "https://qainterview.pythonanywhere.com",
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },
    {
      testDir: "./tests/api",
      name: "API Tests",
      use: {
        baseURL: "https://qainterview.pythonanywhere.com",
        extraHTTPHeaders: {},
        headless: false,
      },
    },
  ],
});
