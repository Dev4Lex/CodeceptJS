const { pause } = require("codeceptjs");

Feature('store');

Scenario('test something', ({ I, homePage }) => {
    I.amOnPage('http://opencart.qatestlab.net/');
    homePage.openRegistrationPage();
    I.see('Register Account');
    I.fillField({css: '#input-firstname'}, 'Alex');
    //pause();
});

xScenario('grab smth', async ({ I }) => {
I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=29');
I.waitForVisible({css: 'h2.product-title'}, 5);
let price = await I.grabTextFrom('(//span[@class="price-new"])[1]');
console.log(price);
}).tag('grab');
