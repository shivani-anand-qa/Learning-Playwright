import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: 'html',

    // Global timeout for each test
    timeout: 30000,

    // Retry failed tests once before marking them as failed
    retries: 1,

    use: {
        headless: false,

        // Base URL so you can use page.goto('/path') instead of full URLs
        baseURL: 'https://courses.thetestingacademy.com',
    },

    // Run tests in multiple browsers
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'Safari',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
