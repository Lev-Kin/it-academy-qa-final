const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, assert } = require('chai');
const { PageFactory } = require('../pageobjects/PageFactory');

Given(/^I navigate to the "(.*)" page$/, async (page) => {
  await browser.url(page);
  await browser.deleteCookies();
  await browser.setWindowSize(1920, 1580);
});

When(/^I search by phrase "(.*)"$/, async (phrase) => {
  await $(PageFactory['Search']['Search Field']).waitForClickable();
  await $(PageFactory['Search']['Search Field']).setValue(phrase);
  await $(PageFactory['Search']['Search Field']).waitForClickable();
  await browser.keys('Enter');
});

Then('I should see search results related to {text}', async function (text) {
  expect(await $(PageFactory['Section Page']['Bread Crumps']).getText()).that.does.include(text);
});

Then('I should see a message indicating no results found {text}', async function (text) {
  expect(await $(PageFactory['Section Page']['Bread Crumps']).getText()).to.equal(`По запросу «${text}» ничего не найдено`);
});

When('I click on the Books section in the left navigation bar', async function () {
  await $(PageFactory['Left Navigation Bar']['Books Section']).waitForClickable();
  await $(PageFactory['Left Navigation Bar']['Books Section']).click();
});

Then('I should be taken to the Books category page', async function () {
  expect(await $(PageFactory['Section Page']['Bread Crumps']).getText()).to.equal('Книги');
});

When('I click on the Stationery section in the left navigation bar', async function () {
  await $(PageFactory['Left Navigation Bar']['Stationery Section']).waitForClickable();
  await $(PageFactory['Left Navigation Bar']['Stationery Section']).click();
});

Then('I should be taken to the Stationery category page', async function () {
  expect(await $(PageFactory['Section Page']['Bread Crumps']).getText()).to.equal('Канцтовары, учёба');
});

Then('I should see the main {string} with various offers', async function (element) {
  const isDisplayed = await PageFactory['Main Page'].isSliderDisplayed();
  assert.isTrue(isDisplayed, `${element}`);
});

When('I click on {locator} button', async function (selector) {
  await $(selector).click();
});

When('I fill in {locator} field with {text}', async (selector, text) => {
  await $(selector).setValue(text);
});

Then('I expect element {locator} is equal to {text}', async (selector, text) => {
  expect(await $(selector).getText()).to.equal(text);
});

When('I click on First Search Results button', async function () {
  await $(PageFactory['Search']['First Search Results']).waitForClickable();
  await $(PageFactory['Search']['First Search Results']).click();
});

Then('Then the cart should contain {string}', async function (element) {
  const isDisplayed = await PageFactory['Main Page'].isCarCountDisplayed();
  assert.isTrue(isDisplayed, `${element}`);
});
