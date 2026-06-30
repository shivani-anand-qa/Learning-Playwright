import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    //For invalid login
    await page.locator('[data-test="login-credentials"]').click();
    await page.locator('[data-test="username"]').fill('error_user');
    await page.locator('[data-test="password"]').fill('tta_user');
    await page.locator('[data-test="login-button"]').click();

    //verify the error message
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

    //For Valid Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();

    //verify product page
    await expect(page.locator('[data-test="title"]')).toContainText('Products');

    //logout
    await page.locator('[data-test="open-menu"]').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
});