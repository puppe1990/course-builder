import path from "node:path";
import { promises as fs } from "node:fs";
import { chromium, devices } from "playwright";
import {
  ensureDirectory,
  legacyReadmeScreenshotsRoot,
  readmeScreenshotTargets,
  readmeScreenshotsRoot,
  startStaticServer,
  toAbsoluteSiteUrl,
} from "./export-site-utils";

async function main() {
  await ensureDirectory(readmeScreenshotsRoot);
  await ensureDirectory(legacyReadmeScreenshotsRoot);

  const server = await startStaticServer();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext(devices["Desktop Chrome"]);

  try {
    for (const target of readmeScreenshotTargets) {
      const page = await context.newPage();
      const screenshotPath = path.join(
        readmeScreenshotsRoot,
        target.outputName,
      );
      await page.goto(toAbsoluteSiteUrl(server.origin, target.routePath), {
        waitUntil: "networkidle",
      });
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
      });
      if (legacyReadmeScreenshotsRoot !== readmeScreenshotsRoot) {
        await fs.copyFile(
          screenshotPath,
          path.join(legacyReadmeScreenshotsRoot, target.outputName),
        );
      }
      await page.close();
      console.log(`Captured ${target.outputName}`);
    }
  } finally {
    await context.close();
    await browser.close();
    await server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
