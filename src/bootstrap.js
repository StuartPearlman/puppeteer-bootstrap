const isBitbucket = process.env.BITBUCKET;
require('dotenv-extended').load({
    silent: isBitbucket,
    errorOnMissing: !isBitbucket,
    errorOnExtra: !isBitbucket,
});

const puppeteer = require('puppeteer');
const { expect } = require('chai');
const { getEnv, getTabByUrl } = require('./helpers');

const env = getEnv();
const opts = {
    // Feel free to update this to headless with no slow-mo, but I have found this config to be more stable.
    headless: false,
    slowMo: 20,
    timeout: 1000 * 60 * 3, // 3 minutes
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: {
        width: 1080,
        height: 720,
    },
};

async function setupBrowser() {
    const page = await browser.newPage();
    await page.goto(env.baseUrl, {
        waitUntil: 'networkidle0',
    });

    // Can't close this until at least one other tab is open
    const blankLaunchTab = await getTabByUrl('about:blank');
    await blankLaunchTab.close();

    // Set location to Chicago
    const context = browser.defaultBrowserContext();
    await context.overridePermissions(getEnv().baseUrl, ['geolocation']);
    await page.setGeolocation({ latitude: 41.8864644, longitude: -87.6296971 });

    return page;
}

before(async () => {
    global.expect = expect;
    global.browser = await puppeteer.launch(opts);
    global.page = await setupBrowser();
});

after(() => {
    browser.close();
});
