const { pause } = require("codeceptjs");

Feature('store');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/');
    I.click({ xpath: '//*[@id="top-links"]/ul/li/span/span' });
    I.click({ xpath: '//a[.="Register"]' });
    I.see('Register Account');
    I.fillField({css: '#input-firstname'}, 'Alex');
    //pause();
});

Scenario('grab smth', async ({ I }) => {
I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=29');
I.waitForVisible({css: 'h2.product-title'}, 5);
let price = await I.grabTextFrom('(//span[@class="price-new"])[1]');
console.log(price);
}).tag('grab');
