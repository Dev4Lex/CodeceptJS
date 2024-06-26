const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
require('dotenv').config();

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
      windowSize: '1366×768'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    },
    Converter: {
      require: './helpers/converter_helper.js',
    },
    REST:{
      endpoint: 'https://currate.ru',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},
  },
  //  plugins: {
  //    tryTo: {
  //      enabled: true
  //    }
  //  },

  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  },
  include: {
    I: './steps_file.js',
    homePage: "./pages/home.js",
    registerPage: "./pages/register.js",
    productPage: "./pages/product.js",
    checkoutPage: "./pages/checkout.js"
  },
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  name: 'CodeceptJS-1'
}