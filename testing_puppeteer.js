const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();


        page = await browser.newPage();
        await page.goto('http://example.com/some.html', {waitUntil: 'load'});


    const newPage = await page.evaluate(() => {

        return  document.getElementById("idexample").innerHTML;

        });

     console.log(newPage)

  })();