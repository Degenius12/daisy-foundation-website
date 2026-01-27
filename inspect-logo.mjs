import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Take full page screenshot
    await page.screenshot({ path: 'screenshot-full.png', fullPage: true });
    console.log('✓ Full page screenshot saved');

    // Take header screenshot
    const header = await page.locator('header').first();
    await header.screenshot({ path: 'screenshot-header.png' });
    console.log('✓ Header screenshot saved');

    // Inspect logo element
    const logo = await page.locator('img[alt*="Daisy"]').first();
    const logoVisible = await logo.isVisible();
    console.log(`\n=== Logo Visibility: ${logoVisible} ===`);

    if (logoVisible) {
      const boundingBox = await logo.boundingBox();
      console.log('Logo bounding box:', boundingBox);

      const logoSrc = await logo.getAttribute('src');
      console.log('Logo src:', logoSrc);

      const logoClass = await logo.getAttribute('class');
      console.log('Logo class:', logoClass);
    }

    // Check for SVG rendering
    const svgExists = await page.locator('img[src*="logo"]').count();
    console.log(`\n=== SVG/Logo Images Found: ${svgExists} ===`);

    // Check console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForTimeout(2000);

    if (errors.length > 0) {
      console.log('\n=== Console Errors: ===');
      errors.forEach(err => console.log('  -', err));
    } else {
      console.log('\n=== No Console Errors ===');
    }

    // Get computed styles of logo
    const styles = await logo.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        width: computed.width,
        height: computed.height,
        display: computed.display,
        opacity: computed.opacity,
        visibility: computed.visibility,
      };
    });
    console.log('\n=== Logo Computed Styles: ===');
    console.log(styles);

    // Check if SVG loads properly
    const svgContent = await page.evaluate(() => {
      const img = document.querySelector('img[alt*="Daisy"]');
      return {
        naturalWidth: img?.naturalWidth,
        naturalHeight: img?.naturalHeight,
        complete: img?.complete,
        currentSrc: img?.currentSrc,
      };
    });
    console.log('\n=== SVG Load Status: ===');
    console.log(svgContent);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
