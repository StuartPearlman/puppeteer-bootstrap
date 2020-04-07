/*
 This is a "Page".
 You should define how to navigate to the page under test here, as well helper methods, getters, etc.
 */

const { getEnv } = require('../helpers');

const env = getEnv();

class AboutPage {
    async open() {
        return page.goto(`${env.baseUrl}/about`, {
            waitUntil: 'networkidle0', // Page is loaded when requests stop
        });
    }

    async getCareersButtonLink() {
        // Not ideal to insert waits, but href appears to be dynamically populated
        await page.waitFor(2000);
        return page.$('div > [href="https://boards.greenhouse.io/inspire11?gh_src=34d62c8c2"]');
    }
}

module.exports = {
    AboutPage,
};
