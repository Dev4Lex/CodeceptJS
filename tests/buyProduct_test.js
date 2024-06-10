let productLinks = new DataTable(['link']); 
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=36']);

let loginUser = {
    email : 'test99999@test.com',
    password: 'veryStr0ngP@ssword',
};

const LinksGetter = require('../helpers/productLinksGetter.js');
let productLinks3 = LinksGetter.getLinks();
console.log(productLinks3);

Feature('buy');

Before(({ I }) => { 
    I.login(loginUser);
  });

Data(productLinks3).Scenario('buy products', async ({ I, homePage, productPage, current}) => {
  console.log(await homePage.checkCartIsEmpty());
  let attributesArray = await I.grabAttributeFromAll(homePage.deleteItemfromCartIcon);
  console.log("Array size: " + attributesArray.length);
  I.amOnPage(current.link);
  let price = await productPage.getProductPrice();
  I.selectColor();
  console.log(price);
  I.assertEqual(price, '$60.00', "Prices are not in match");
}).tag('buy');

After(({ I }) => { 
  console.log('test After');
  });
