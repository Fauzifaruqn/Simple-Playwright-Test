const { Given, When, Then } = require("@cucumber/cucumber");

const {HomePage} = require('../../pages/homePage')

let homePage;


Then("user should be able direct to the home page", async function(){
  homePage = new HomePage();

 await homePage.titleOnPage()
})

Then("user choose product with name {string}", async function(nameProduct){
  await homePage.productSelected(nameProduct)
})