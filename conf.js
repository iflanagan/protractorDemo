// var HTTPSProxyAgent = require('https-proxy-agent');
// var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")


var value = "Starting Sauce Protractor script now";
console.log(value);


exports.config = {

	sauceUser: process.env.SAUCE_USERNAME,
        sauceKey: process.env.SAUCE_ACCESS_KEY,

    // webDriverProxy: 'http://<proxy>:<port>',


    // http://localhost:4445/wd/hub';
    // seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
//       seleniumAddress: 'http://localhost:4445/wd/hub',
    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [{

        browserName: 'firefox',
        version: 'latest',
	platform: 'OS X 10.10',
        name: "Ian-firefox-mac-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
//	tunnelIdentifier: 'WebVMTunnelId'
    },

	{

        browserName: 'chrome',
        version: 'latest',
	platform: 'macOS 10.14',
        name: "Ian-chrome-mac-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

    {

        browserName: 'chrome',
        version: 'latest',
	platform: 'Windows 10',
        name: "Ian-chrome-windowsten-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'chrome',
        version: 'latest-1',
	platform: 'Windows 10',
        name: "Ian-chrome-windowsten-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'chrome',
        version: 'latest-2',
	platform: 'Windows 10',
        name: "Ian-chrome-windowsten-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'firefox',
        version: 'latest',
	platform: 'Windows 10',
        name: "Ian-FF-windowsten-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'firefox',
        version: 'latest-1',
	platform: 'Windows 10',
        name: "Ian-FF-windowsten-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'firefox',
        version: 'latest',
	platform: 'Windows 8.1',
        name: "Ian-FF-windowseightdotone-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'firefox',
        version: 'latest-1',
	platform: 'Windows 8.1',
        name: "Ian-FF-windowseightdotone-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'firefox',
        version: 'latest-2',
	platform: 'Windows 8.1',
        name: "Ian-FF-windowseightdotone-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },


 {

        browserName: 'chrome',
        version: 'latest',
	platform: 'Windows 8.1',
        name: "Ian-chrome-windowseightdotone-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'chrome',
        version: 'latest-1',
	platform: 'Windows 8.1',
        name: "Ian-chrome-windowseightdotone-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

{

        browserName: 'chrome',
        version: 'latest-2',
	platform: 'Windows 8.1',
        name: "Ian-chrome-windowseightdotone-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },

 {

        browserName: 'firefox',
        version: 'latest-2',
	platform: 'Windows 10',
        name: "Ian-FF-windowsten-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    },



	{
        
        browserName: 'chrome',
        version: 'latest-1',
        platform: 'Windows 7',
        name: "Ian-chrome-mac-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    }, 
 {
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 7',
        name: "Ian-chrome-windowsseven-protractor-tests",
        shardTestFiles: true,
        maxInstances: 20
    }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Ian_Protractor_Test");
    }
}
