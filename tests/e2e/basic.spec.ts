import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')

  // Check that the page title contains SignalForge
  await expect(page).toHaveTitle(/SignalForge/)

  // Check that the main element is present
  await expect(page.locator('main')).toBeVisible()
})