import { defineConfig, devices } from "@playwright/test";
// See https://playwright.dev/docs/test-configuration.

export default defineConfig({
  testDir: "./examples",
  fullyParallel: true,
  reporter: "list",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
