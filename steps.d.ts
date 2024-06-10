/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type registerPage = typeof import('./pages/register.js');
type productPage = typeof import('./pages/product.js');
type checkoutPage = typeof import('./pages/checkout.js');
type ChaiWrapper = import('codeceptjs-chai');
type Converter = import('./helpers/converter_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, registerPage: registerPage, productPage: productPage, checkoutPage: checkoutPage }
  interface Methods extends Playwright, ChaiWrapper, Converter {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
