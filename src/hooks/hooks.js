const {BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const page = require("@playwright/test");

const {createLogger} = require('winston');
const { options } = require('../helper/util/logger');

BeforeAll(async function() {
    // browser = await chromium.launch({headless: !false})

    // const browserType = "chrome"; // Change this as needed
    let browser = await page.chromium.launch({ headless: false });
    global.browser = browser;
})

Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id

    const context =  await browser.newContext({
        viewport: { width: 1536, height: 816 }
      })
    global.page = await context.newPage();
    global.logger = createLogger(options(scenarioName))
    

})


After(async function ({pickle, result}) {

    // if(result?.status == Status.FAILED) {
        // console.log('cek',result)
        // console.log('cek ini',pickle.name)
        const img = await global.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`, type: "png"})
        // console.log('cek ini adapa', img)
        await this.attach(img, "image/png")
    //  }

 
   
    // Close the page and browser after the delay
    // await new Promise(resolve => setTimeout(resolve, 1000));
    await global.page.close();
    // await new Promise(resolve => setTimeout(resolve, 5000));

    // await global.context.close();

})

AfterAll(async function () {
    await global.browser.close();
    // fixture.logger.close();
})