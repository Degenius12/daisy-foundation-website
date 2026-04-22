import { chromium } from "playwright";

const url = process.env.URL || "http://localhost:3000";
const outDir = "scripts/screenshots";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle" });
await page.locator("#board").scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.locator("#board").screenshot({ path: `${outDir}/board-desktop.png` });

await page.setViewportSize({ width: 390, height: 844 });
await page.locator("#board").scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.locator("#board").screenshot({ path: `${outDir}/board-mobile.png` });

await browser.close();
console.log("ok");
