/*
 This is a "Page".
 You should define how to navigate to the page under test here, as well helper methods, getters, etc.
 */

const { getEnv, clearInputAndEnterValue } = require('../helpers');

const env = getEnv();

class HomePage {
    async open() {
        return page.goto(env.baseUrl, {
            waitUntil: 'networkidle0', // Page is loaded when requests stop
        });
    }

    async getMessageTextArea() {
        return page.$('[name="Message"]');
    }

    async fillOutForm() {
        await clearInputAndEnterValue('[name="Name"]', 'Mr. Lead');
        await clearInputAndEnterValue('[name="Email"]', 'lead@inspire11.com');
        await clearInputAndEnterValue('[name="Company-Name"]', 'Really awesome future client');
        await clearInputAndEnterValue('[name="Message"]', 'Thanks for using Puppeteer Bootstrap!');

        // Don't actually submit it, of course
        await page.waitForTimeout(3000);
    }
}

module.exports = {
    HomePage,
};
