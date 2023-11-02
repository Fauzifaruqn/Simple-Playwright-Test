const { expect } = require("@playwright/test");

// let { setDefaultTimeout } = require("@cucumber/cucumber");
// setDefaultTimeout(60 * 15000);
class HomePage {

  titleInventory = "//div[text()='Swag Labs']";
  titleProduct = "//span[text()='Products']";


  async titleOnPage(){
   
    const titleIvt = await global.page.locator(this.titleInventory)
    expect(titleIvt).toBeVisible();

    const titlePd = await global.page.locator(this.titleProduct)
    expect(titlePd).toBeVisible();

  }

  async productSelected(name){
    const productSelected = await global.page.locator(`//div[contains(@class,'inventory_item_name') and contains(text(),'${name}')]`)
    await expect(productSelected).toContainText(name)
  }

}

module.exports = {HomePage}