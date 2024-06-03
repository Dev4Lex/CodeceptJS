let loginUser = {
    email : 'test99999@test.com',
    password: 'veryStr0ngP@ssword',
};

Feature('buy');

Scenario('buy products', ({ I, homePage, registerPage }) => {
    I.login(loginUser);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40');
    pause();
}).tag('buy');
