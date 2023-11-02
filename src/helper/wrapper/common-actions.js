const { expect } = require("@playwright/test");

const commonActions = {
  async goto(url) {
    await global.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  },

  async waitAndClick(locator) {
    const element = global.page.locator(locator);
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  },

  async navigateTo(link) {
    await Promise.all([
      global.page.waitForNavigation(),
      global.page.click(link),
    ]);
  },

  // Add other common actions here
};

module.exports = commonActions;
