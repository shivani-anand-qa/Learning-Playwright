import { test, expect } from '@playwright/test'


test("Verify that the title will be TTA Cart", async ({ page }) => {
  await page.goto("https://courses.thetestingacademy.com/courses/playwright-automation-mastery-2x/contents/6a32303ec888d");
  await page.waitForTimeout(5000);
  await expect(page).toHaveTitle("TTACart-Login");
})