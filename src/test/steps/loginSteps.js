const { Given, When, Then } = require("@cucumber/cucumber");

const {LoginPage} = require('../../pages/loginPage')

let loginPage;

When('I enter user name {string} in logIn Screen', async function(userName) {
  loginPage = new LoginPage()
  // await loginPage.navigate()
  await loginPage.navigate()
  await loginPage.setUserName(userName)
})


When('I enter password {string} in logIn Screen', async function(password) {

  await loginPage.setPassword(password)
})

When('I click on the login button', async function() {
  await loginPage.clickLoginBtn()
})