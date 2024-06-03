const { I } = inject();

module.exports = {

  priceText : {xpath: '//div[@class="price"]/span'},

  async getProductPrice(){
    return await I.grabTextFrom(this.priceText);
  }
  // insert your locators and methods here
}
