const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      windowSize: '1440x900'
    },
    "ChaiWrapper": {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    homePage: "./pages/home.js",
    registerPage: "./pages/register.js",

    productPage: "./pages/product.js",

    checkoutPage: "./pages/checkout.js",
  },
  name: 'CodeceptJS-1'
}