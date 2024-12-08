const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'C:/Users/USER/Downloads/portfolio.pdf',
    format: 'A4',
    printBackground: true,
    scale: 1, // Remove scaling to allow natural page flow
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
  });

  await browser.close();
})();
