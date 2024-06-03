let loginUser = {
    email : 'test99999@test.com',
    password: 'veryStr0ngP@ssword',
};

Feature('buy');

Scenario('buy products', async ({ I, productPage }) => {
    I.login(loginUser);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40');
    let price = await productPage.getProductPrice();
    console.log(price);
    pause();
}).tag('buy');
