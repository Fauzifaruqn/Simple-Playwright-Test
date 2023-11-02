const { expect } = require("@playwright/test");
// let { setDefaultTimeout } = require("@cucumber/cucumber");
// setDefaultTimeout(60 * 15000);
class LoginPage {
  userNameField = "[data-test='username']"
  passwordField = "[data-test='password']"
  loginBtn = "[data-test='login-button']"
  errorMsg  = 'error-message-container'

  async navigate() {
    await global.page.goto('https://www.saucedemo.com/')
}

  async setUserName(name){
    // await global.page.locator(this.userNameField).fill(name)
    await global.page.locator(this.userNameField).fill(name);
  }

  async setPassword(password){
    await global.page.locator(this.passwordField).fill(password)
  }

  async clickLoginBtn(){
    await global.page.locator(this.loginBtn).click()
  }

}

module.exports = {LoginPage}