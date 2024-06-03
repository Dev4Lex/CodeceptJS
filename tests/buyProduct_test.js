let loginUser = {
    email : 'test99999@test.com',
    password: 'veryStr0ngP@ssword',
};

Feature('buy');

Scenario('buy products', ({ I, homePage, registerPage }) => {
    I.login(loginUser);
    pause();
}).tag('buy');
