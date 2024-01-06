const axios = require('axios');
const { expect } = require('chai');

describe('api testing of "Oz.by" website', function () {
  test('Check status code of the main page', async () => {
    const response = await axios.get('https://oz.by');
    expect(response.status).to.equal(200);
  });
  test('Check status code of the books section', async () => {
    const response = await axios.get('https://oz.by/books/');
    expect(response.status).to.equal(200);
  });
  test('check status code for opening personal account', async () => {
    const response = await axios.get('https://oz.by/personal/');
    expect(response.status).to.equal(200);
  });
  test('Check status code of the stationery section', async () => {
    const response = await axios.get('https://oz.by/stationery/');
    expect(response.status).to.equal(200);
  });
  test('Check status code of the delivery and payment page', async () => {
    const response = await axios.get('https://oz.by/help/order.payment/');
    expect(response.status).to.equal(200);
  });
  test('Check status code of the shop map', async () => {
    const response = await axios.get('https://oz.by/store/');
    expect(response.status).to.equal(200);
  });
});
