
const { Given, When, Then } = require("@cucumber/cucumber");
const { Assert } = require('../../helper/wrapper/assert');
const { expect } = require("@playwright/test");


let assert = new Assert()

Then("Validate that URL contains {string} text", async (url) => {
  assert.assertURLContains(url)
  const title = await global.page.locator("//div[text()='Swag Labs']")
  await expect(title).toBeVisible();
})