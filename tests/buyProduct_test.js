let productLinks = new DataTable(['link']); 
productLinks.add(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=40']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29']);
productLinks.xadd(['http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=36']);

let loginUser = {
    email : 'test99999@test.com',
    password: 'veryStr0ngP@ssword',
};

const FileReader = require('./../helpers/fileReader.js');
let productLinks3 = FileReader.getArrayOfProductLinkObjects((FileReader.getArrayFromString()));
console.log(productLinks3);

Feature('buy');

Before(({ I }) => { // or Background
    I.login(loginUser);
  });

Data(productLinks3).Scenario('buy products', async ({ I, productPage, current}) => {
    I.amOnPage(current.link);
    let price = await productPage.getProductPrice();
    I.selectColor();
    console.log(price);
    I.assertEqual(price, '$60.00', "Prices are not in match");
}).tag('buy');

After(({ I }) => { 
  console.log('test After');
  });
