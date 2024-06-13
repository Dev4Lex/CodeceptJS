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
const apiKey = process.env.CURRATE_KEY;
const url = `/api/?get=rates&pairs=USDRUB,EURRUB&key=${apiKey}`;

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
  console.log(await I.parsePrice(price));
  let response = await I.sendGetRequest(url);
  I.seeResponseCodeIs(200);
  console.log(response.data.data.USDRUB);
}).tag('buy');

After(({ I }) => { 
  console.log('test After');
  });
