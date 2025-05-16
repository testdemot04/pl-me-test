import {Page} from '@playwright/test'

export async function waitUntilBannersDisappear(
  page: Page,
  processBannerSelector: string,
  failedImportSelector: string,
  passedImportSelector: string,
  maxRetries = 10
): Promise<void> {
  let attempt = 0;

  // Step 1: Wait for process banner to disappear (with refresh)
  while (attempt < maxRetries) {
    const isVisible = await page.locator(processBannerSelector).isVisible().catch(() => false);
    if (!isVisible) break;

    console.log(`Process banner still visible... Refreshing [Attempt ${attempt + 1}]`);
    await page.waitForTimeout(20000); // 20 sec
    await page.reload();
    attempt++;
  }

  if (attempt === maxRetries) {
    throw new Error("Process banner did not disappear after maximum retries.");
  }

  // Step 2: Wait for either the "Import failed" or "Import passed" banner to appear
  console.log("Waiting for either Import failed or Import passed banner to appear...");

  let statusFound = false;
  for (let i = 0; i < maxRetries; i++) {
    await page.reload();
    //await page.waitForLoadState('networkidle');

    const failedVisible = await page.locator(failedImportSelector).isVisible();
    const passedVisible = await page.locator(passedImportSelector).isVisible();

    if (failedVisible || passedVisible) {
      statusFound = true;
      console.log("Import status banner appeared.");

      // Step 3: Wait for it to disappear
      const bannerLocator = failedVisible
        ? page.locator(failedImportSelector)
        : page.locator(passedImportSelector);

      console.log("Waiting for import status banner to disappear...");
      await bannerLocator.waitFor({ state: 'hidden', timeout: 600000 });
      console.log("Import status banner disappeared.");
      break;
    }

    console.log(`Import status not found yet. Retrying [${i + 1}]...`);
    await page.waitForTimeout(3000);
  }

  if (!statusFound) {
    throw new Error("Import status banner did not appear after refresh attempts.");
  }
}
