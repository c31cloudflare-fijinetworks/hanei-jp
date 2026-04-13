const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // HANEI STANDARD: 3:2 Aspect Ratio
  await page.setViewport({ width: 1200, height: 800 });

  const demoDir = path.join(__dirname, '../public/demos');
  const outputDir = path.join(__dirname, '../public/images/demos');

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const demos = fs.readdirSync(demoDir);

  for (const demo of demos) {
    const demoPath = path.join(demoDir, demo, 'index.html');
    if (fs.existsSync(demoPath)) {
      console.log(`Capturing: ${demo}...`);
      // Visit local file
      await page.goto(`file://${demoPath}`, { waitUntil: 'networkidle0' });
      
      // Hide the Hanei Return button for the screenshot to keep it clean
      await page.addStyleTag({ content: 'a[href*="/demos"] { display: none !important; }' });

      await page.screenshot({
        path: path.join(outputDir, `${demo}.webp`),
        type: 'webp',
        quality: 90
      });
    }
  }

  await browser.close();
  console.log('HANEI SNAPSHOTS COMPLETE: Saved to public/images/demos/');
})();
