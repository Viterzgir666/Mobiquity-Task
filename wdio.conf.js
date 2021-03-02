exports.config = {
    path: '/wd/hub',
    specs: ['./tests/*.test.js'],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--start-fullscreen', '--disable-web-security']
            }
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://cafetownsend-angular-rails.herokuapp.com/login',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: [
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        //require: ['@babel/register'],
        timeout: 60000
    },
    before: function() {
        //require('@babel/register');
        let chai = require('chai');
        global.expect = chai.expect;
        global.reporter = require('@wdio/allure-reporter');
    },
    afterTest: function(test, context, { error, result, duration, passed }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    }
};
