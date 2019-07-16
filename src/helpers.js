const path = require('path');
const fs = require('fs');
const ENV = require('./ENV');

function getEnv() {
    let config;

    switch (process.env.ENV) {
        case 'dev':
            config = ENV.dev;
            break;
        case 'staging':
            config = ENV.staging;
            break;
        default:
            throw new Error('You must pass in an environment (dev, staging) when launching the test runner.');
    }

    return config;
}

async function takeScreenshot({ error, fileName }) {
    const dateString = new Date().toISOString().replace(/T.+/, '');
    const files = fs.readdirSync('screenshots');

    await page.screenshot({
        path: `screenshots/${dateString}-${path.parse(fileName).name}-${files.length}.jpeg`,
        fullPage: true,
    });

    // Trigger original failed test output after screenshot
    throw error;
}

async function getTabByUrl(url) {
    await browser.waitForTarget(target => target.url().includes(url));
    const pages = await browser.pages();
    return pages.find(page => page.url().includes(url));
}

async function getAttrValue(elm, attr) {
    const propertyHandle = await elm.getProperty(attr);
    return propertyHandle.jsonValue();
}

async function isVisibleBySelector(selector) {
    await page.waitForSelector(selector, { visible: true });
    return true;
}

async function clearInputAndEnterValue(selector, value) {
    await page.click(selector, { clickCount: 3 });
    await page.keyboard.press('Backspace');
    await page.type(selector, value);
}

module.exports = {
    getEnv,
    takeScreenshot,
    getTabByUrl,
    getAttrValue,
    isVisibleBySelector,
    clearInputAndEnterValue,
};
