import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test('should allow me to add todo items', async ({ page }) => {
  // Create a todo
  await page.locator('.new-todo').fill('buy some cheese');
  await page.locator('.new-todo').press('Enter');

  // Make sure the list has the todo item
  await expect(page.locator('.view label')).toHaveText([
    'buy some cheeze'
  ]);
});